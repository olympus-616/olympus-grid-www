#!/usr/bin/env bash
# scripts/teardown-test-cdn.sh
#
# Tear down the throwaway test CDN provisioned for the Iris MVP
# architecture POC (2026-04-28). Safe to run any time after validation
# is complete.
#
# Resources removed:
#   - CloudFront distribution E29U6MZUQ6DP0U (test-og-iris-bundle)
#   - CloudFront Origin Access Control E1MUAQSUFJWK33
#   - CloudFront Function test-og-iris-rewrite
#   - S3 bucket test-og-iris-bundle (with all contents)
#
# Distribution disable + delete is a 2-step dance because CloudFront
# requires the distribution be Disabled + InProgress→Deployed before
# delete. The disable step takes ~10-15 minutes to propagate.

set -euo pipefail

DIST_ID="E29U6MZUQ6DP0U"
OAC_ID="E1MUAQSUFJWK33"
FN_NAME="test-og-iris-rewrite"
BUCKET="test-og-iris-bundle"

echo "[teardown] Disabling CloudFront distribution ${DIST_ID}..."
ETAG=$(aws cloudfront get-distribution-config --id "$DIST_ID" --query 'ETag' --output text)
aws cloudfront get-distribution-config --id "$DIST_ID" --query 'DistributionConfig' > /tmp/teardown-dist-config.json
# Flip Enabled → false
jq '.Enabled = false' /tmp/teardown-dist-config.json > /tmp/teardown-dist-config-disabled.json
aws cloudfront update-distribution \
  --id "$DIST_ID" \
  --distribution-config file:///tmp/teardown-dist-config-disabled.json \
  --if-match "$ETAG" > /dev/null
echo "[teardown] Disable submitted. Waiting for Deployed status (10-15 min)..."

aws cloudfront wait distribution-deployed --id "$DIST_ID"

echo "[teardown] Deleting CloudFront distribution..."
ETAG2=$(aws cloudfront get-distribution-config --id "$DIST_ID" --query 'ETag' --output text)
aws cloudfront delete-distribution --id "$DIST_ID" --if-match "$ETAG2"

echo "[teardown] Deleting Origin Access Control..."
OAC_ETAG=$(aws cloudfront get-origin-access-control --id "$OAC_ID" --query 'ETag' --output text)
aws cloudfront delete-origin-access-control --id "$OAC_ID" --if-match "$OAC_ETAG"

echo "[teardown] Deleting CloudFront Function..."
FN_ETAG=$(aws cloudfront describe-function --name "$FN_NAME" --query 'ETag' --output text)
aws cloudfront delete-function --name "$FN_NAME" --if-match "$FN_ETAG"

echo "[teardown] Deleting S3 bucket and contents..."
aws s3 rb "s3://${BUCKET}" --force

echo "[teardown] ✓ All test CDN resources removed."
