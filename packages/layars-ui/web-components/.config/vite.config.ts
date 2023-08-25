/// <reference types="vitest" />

import { defineConfig } from 'vite'
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint'

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
                    '@layars/layars-utils': 'layars-utils',
                    '@layars/layars-types': 'layars-types',
                    'lit': 'lit',
                },
            },
            external: ['@layars/layars-utils', '@layars/layars-types', 'lit'],
        },
        reportCompressedSize: true,
        emptyOutDir: true,
    },
    test: {
        watch: false,
        globals: true,
        environment: 'happy-dom',
        include: ['**/*.{spec,test}.ts'],
        resolveSnapshotPath: (path, ext) => `.test/snapshots/spec/${path.split('/').pop()}${ext}`,
    },
    plugins: [eslintPlugin()],
})
