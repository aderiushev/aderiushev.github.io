import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcHtmlPath = path.join(root, 'index.html');
const outLangs = ['es', 'ca', 'ru'];
const defaultLang = 'en';

const readJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function mergeTranslations(lang) {
  const base = readJSON(path.join(root, 'locales', defaultLang, 'index.json'));
  let tr = {};
  try {
    tr = readJSON(path.join(root, 'locales', lang, 'index.json'));
  } catch (_) {
    tr = {};
  }
  return { ...base, ...tr };
}

function replaceInner(html, key, value) {
  const re = new RegExp(`(<[^>]*data-i18n="${escapeRegExp(key)}"[^>]*>)([\\s\\S]*?)(<\\/[^>]+>)`, 'g');
  return html.replace(re, `$1${value}$3`);
}

function replaceAttr(html, key, attr, value) {
  // element must contain data-i18n="key" and the target attribute
  const re = new RegExp(`(<[^>]*data-i18n="${escapeRegExp(key)}"[^>]*${attr}=")([^"]*)(")`, 'g');
  return html.replace(re, `$1${value}$3`);
}

function insertHreflang(html) {
  const block = [
    '  <link rel="alternate" hreflang="x-default" href="/" />',
    '  <link rel="alternate" hreflang="en" href="/" />',
    '  <link rel="alternate" hreflang="es" href="/es/" />',
    '  <link rel="alternate" hreflang="ca" href="/ca/" />',
    '  <link rel="alternate" hreflang="ru" href="/ru/" />',
  ].join('\n');
  return html.replace(/<\/head>/, `${block}\n</head>`);
}

function localizeIndex(lang) {
  const tr = mergeTranslations(lang);
  let html = fs.readFileSync(srcHtmlPath, 'utf8');

  // html lang attribute
  html = html.replace(/<html lang="en">/, `<html lang="${lang}">`);

  // Replace all inner texts with data-i18n
  Object.entries(tr).forEach(([key, value]) => {
    if (key === 'head.description') return; // handled via attr below
    html = replaceInner(html, key, value);
  });

  // meta description (attribute)
  html = html.replace(
    /(<meta[^>]*name="description"[^>]*content=")([^"]*)(")/,
    `$1${tr['head.description']}$3`
  );

  // Adjust asset paths to root-absolute for localized copies
  html = html.replace(/href="styles\.css"/g, 'href="/styles.css"');
  html = html.replace(/src="script\.js"/g, 'src="/script.js"');

  // Hreflang alternates
  html = insertHreflang(html);

  // CV link: prefer localized if present, else fallback to root English CV
  const localizedPdf = `cv-${lang}.pdf`;
  const localizedPdfPath = path.join(root, lang, localizedPdf);
  const hasLocalizedPdf = fs.existsSync(localizedPdfPath);
  const hrefValue = hasLocalizedPdf ? localizedPdf : '/cv.pdf';
  // update href on #download-cv
  html = html.replace(/(<a[^>]*id="download-cv"[^>]*href=")([^"]*)("[^>]*>)/, `$1${hrefValue}$3`);

  // Write to /{lang}/index.html
  const outDir = path.join(root, lang);
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
}

function main() {
  outLangs.forEach((lang) => localizeIndex(lang));
  console.log(`Localized pages built for: ${outLangs.join(', ')}`);
}

main();

