import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function copyDir(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-bundler',
        closeBundle() {
          try {
            const distDir = path.resolve(__dirname, 'dist');
            const distIndex = path.resolve(distDir, 'index.html');
            const dist404 = path.resolve(distDir, '404.html');
            const distNoJekyll = path.resolve(distDir, '.nojekyll');

            // 1. Write .nojekyll in dist so GitHub Pages doesn't ignore assets
            fs.writeFileSync(distNoJekyll, '');

            // 2. Write 404.html in dist so page reloads don't return 404
            if (fs.existsSync(distIndex)) {
              fs.copyFileSync(distIndex, dist404);
            }

            // 3. Mirror complete build to docs/ directory for users who choose
            // GitHub Pages source: "Deploy from a branch" -> "main" -> "/docs"
            const docsDir = path.resolve(__dirname, 'docs');
            copyDir(distDir, docsDir);
          } catch (e) {
            // ignore if not building
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
