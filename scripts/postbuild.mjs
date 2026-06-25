import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '..', 'out');
const prefix = '/landing-page-serviserc';

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      modified = true;
    }
  }
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Patched: ${path.relative(outDir, filePath)}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.txt')) {
      replaceInFile(full, [
        [`url(/img/`, `url(${prefix}/img/`],
        [`"/img/`, `"${prefix}/img/`],
        [`href="/favicon.ico`, `href="${prefix}/favicon.ico`],
        [`src="/favicon.ico`, `src="${prefix}/favicon.ico`],
        [`"/favicon.ico?`, `"${prefix}/favicon.ico?`],
        [`"/_next/static/`, `"${prefix}/_next/static/`],
        [`href="/_next/static/`, `href="${prefix}/_next/static/`],
        [`src="/_next/static/`, `src="${prefix}/_next/static/`],
        [`"/servicios/`, `"${prefix}/servicios/`],
        [`href="/servicios/`, `href="${prefix}/servicios/`],
        [`"/convenio-uch/`, `"${prefix}/convenio-uch/`],
        [`href="/convenio-uch/`, `href="${prefix}/convenio-uch/`],
        [`"/#`, `"${prefix}/#`],
        [`href="/#`, `href="${prefix}/#`],
        [`href="/"`, `href="${prefix}/"`],
      ]);
    }
  }
}

walk(outDir);
console.log('Postbuild patch complete.');
