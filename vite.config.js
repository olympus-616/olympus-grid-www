import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `manualChunks` only applies to the client build. In SSR mode
// (`vite build --ssr ...`) react/react-dom are externals and Rollup
// errors if they appear in manualChunks.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
            },
          },
        },
  },
  // react-helmet-async ships as CJS; Node's strict ESM loader can't pull
  // named exports from it. Inline it into the SSR bundle so Vite's CJS
  // interop kicks in at build time.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
}))
