import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

const ReactCompilerConfig = {
  // Compiler off:
  // compilationMode: 'annotation',
  // ===========================
  // Compiler on
  compilationMode: 'all',
  sources: (filename: string) => {
    return filename.indexOf('src/routes/compiler') !== -1
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
      }
    }),
    tsconfigPaths(),
    checker({ typescript: true })
  ],
  server: {
    port: 9001
  }
})
