import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// Find all css files in dist/assets
const cssFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.css'));
let combinedCss = '';
for (const f of cssFiles) {
  combinedCss += fs.readFileSync(path.join(distDir, 'assets', f), 'utf-8') + '\n';
}

// Find all js files in dist/assets
const jsFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.js'));
let combinedJs = '';
for (const f of jsFiles) {
  // replace any </script> with <\/script> to prevent breaking the script tag in HTML
  const content = fs.readFileSync(path.join(distDir, 'assets', f), 'utf-8').replace(/<\/script>/gi, '<\\/script>');
  combinedJs += content + '\n';
}

// Remove external link rel="stylesheet" referencing assets
html = html.replace(/<link\s+rel="stylesheet"[^>]*href="\/assets\/[^"]*"[^>]*>/gi, '');
// Remove script tag referencing assets
html = html.replace(/<script\s+type="module"[^>]*src="\/assets\/[^"]*"[^>]*><\/script>/gi, '');

// Inject inlined style before </head>
html = html.replace('</head>', `<style>\n${combinedCss}\n</style>\n</head>`);

// Inject inlined module script before </body>
html = html.replace('</body>', `<script type="module">\n${combinedJs}\n</script>\n</body>`);

// Write to root, public, and dist
const targets = [
  path.resolve(process.cwd(), 'shepherds-tree-app.html'),
  path.resolve(process.cwd(), 'public', 'shepherds-tree-app.html'),
  path.resolve(process.cwd(), 'dist', 'shepherds-tree-app.html')
];

for (const target of targets) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf-8');
  console.log(`Successfully generated standalone HTML: ${target} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
}
