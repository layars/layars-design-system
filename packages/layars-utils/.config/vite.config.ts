/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            formats: ['es', 'cjs', 'umd'],
            name: 'layars',
        },
        rollupOptions: {
            output: {
                dir: 'lib',
                globals: {
                    react: 'React',
                },
            },
            external: ['react'],
        },
        reportCompressedSize: true,
        emptyOutDir: true,
    },
    plugins: [],
})
