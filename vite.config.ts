import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist/js',
        emptyOutDir: true,
        rollupOptions: {
            input: 'src/content_script.ts',
            output: {
                entryFileNames: 'content_script.js',
                format: 'iife',
                inlineDynamicImports: true,
            },
        },
        sourcemap: false,
        minify: false,
        target: 'esnext',
    },
});
