import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));

const tampermonkeyPreamble = `// ==UserScript==
// @name         ${pkg.name}
// @version      ${pkg.version}
// @description  ${pkg.description}
// @match        https://www.amazon.com/auto-deliveries/*
// @match        https://www.amazon.com/*/auto-deliveries/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==

`;

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: 'src/content_script.ts',
            output: {
                entryFileNames: 'amazon-sas-cancel.user.js',
                format: 'iife',
                inlineDynamicImports: true,
                banner: tampermonkeyPreamble,
            },
        },
        sourcemap: false,
        minify: false,
        target: 'esnext',
    },
});
