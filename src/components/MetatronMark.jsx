import React from 'react'

export default function MetatronMark({ size = 320, animate = true }) {
  const cx = size / 2
  const cy = size / 2
  const R = size * 0.22   // outer circle radius
  const r = size * 0.22   // same — they all equal R in Metatron

  // 6 inner circle centers (hexagonal ring)
  const inner = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * Math.PI / 180
    return { x: cx + R * Math.cos(angle), y: cy + R * Math.sin(angle) }
  })

  // 6 outer circle centers (doubled radius)
  const outer = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * Math.PI / 180
    return { x: cx + R * 2 * Math.cos(angle), y: cy + R * 2 * Math.sin(angle) }
  })

  // head = outer[0] (top), tail = outer[3] (bottom)
  // legs = outer[1], outer[2], outer[4], outer[5]
  const headTail = [0, 3]
  const legs = [1, 2, 4, 5]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
         xmlns="http://www.w3.org/2000/svg" aria-label="Olympus-Grid mark — Metatron's Cube">

      {/* structure lines — royal blue */}
      <g stroke="#2E5DAA" strokeWidth="0.5" fill="none" opacity="0.16">
        {inner.map((a, i) =>
          inner.slice(i + 1).map((b, j) => (
            <line key={`i-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          ))
        )}
        {inner.map((a, i) => (
          <line key={`c-${i}`} x1={cx} y1={cy} x2={a.x} y2={a.y} />
        ))}
        {outer.map((a, i) => (
          <line key={`co-${i}`} x1={cx} y1={cy} x2={a.x} y2={a.y} />
        ))}
      </g>

      {/* outer hex lines — gold */}
      <g stroke="#B8922E" strokeWidth="0.6" fill="none" opacity="0.22">
        {outer.map((a, i) => {
          const b = outer[(i + 1) % 6]
          return <line key={`o-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        })}
        {outer.map((a, i) => {
          const b = outer[(i + 2) % 6]
          return <line key={`od-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        })}
        {inner.map((a, i) => {
          const b = outer[i]
          return <line key={`io-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        })}
      </g>

      {/* inner 6 circles */}
      <g stroke="#2E5DAA" strokeWidth="0.9" fill="rgba(8,14,30,0.55)" opacity="0.58">
        {inner.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={R} />
        ))}
      </g>
      {/* center circle */}
      <circle cx={cx} cy={cy} r={R} stroke="#2E5DAA" strokeWidth="0.9" fill="rgba(6,11,26,0.42)" opacity="0.45" />

      {/* LEGS — royal blue */}
      {legs.map(i => (
        <circle key={`leg-${i}`} cx={outer[i].x} cy={outer[i].y} r={R}
          fill="rgba(10,18,42,0.88)" stroke="#2E5DAA" strokeWidth="2" />
      ))}

      {/* HEAD + TAIL — gold */}
      {headTail.map(i => (
        <circle key={`ht-${i}`} cx={outer[i].x} cy={outer[i].y} r={R}
          fill="rgba(26,14,0,0.88)" stroke="#B8922E" strokeWidth="2.5" />
      ))}

      {/* SHELL — concentric rings */}
      {[0.042, 0.078, 0.116, 0.157, 0.198].map((f, i) => (
        <circle key={`s-${i}`} cx={cx} cy={cy} r={size * f}
          fill="none" stroke="#B8922E"
          strokeWidth={0.9 - i * 0.12}
          opacity={0.88 - i * 0.15} />
      ))}

      {/* center dot */}
      <circle cx={cx} cy={cy} r={size * 0.015} fill="#B8922E" />
      <circle cx={cx} cy={cy} r={size * 0.007} fill="#fff" opacity="0.6" />

      {animate && (
        <style>{`
          @keyframes og-pulse {
            0%,100% { opacity:.18; } 50% { opacity:.32; }
          }
        `}</style>
      )}
    </svg>
  )
}
