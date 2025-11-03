import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const langs = ['es', 'ca', 'ru'];

const templatePath = path.join(root, 'templates', 'cv-template.html');
const template = fs.readFileSync(templatePath, 'utf8');

const nameByLang = {
  es: 'Aleksei Deriushev',
  ca: 'Aleksei Deriushev',
  ru: 'Aleksei Deriushev',
};

const subtitleByLang = {
  es: 'Ingeniero Front-end Senior',
  ca: 'Enginyer Front-end Sènior',
  ru: 'Старший фронтенд‑инженер',
};

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

async function generateForLang(browser, lang) {
  const txtPath = path.join(root, `cv-${lang}.txt`);
  if (!fs.existsSync(txtPath)) {
    throw new Error(`Missing source text: ${txtPath}`);
  }
  const raw = fs.readFileSync(txtPath, 'utf8');
  const html = template
    .replaceAll('{{LANG}}', lang)
    .replaceAll('{{TITLE}}', `${nameByLang[lang]} — ${subtitleByLang[lang]}`)
    .replaceAll('{{NAME}}', nameByLang[lang])
    .replaceAll('{{SUBTITLE}}', subtitleByLang[lang])
    .replaceAll('{{DATE}}', new Date().toISOString().slice(0, 10))
    .replaceAll('{{CONTENT}}', escapeHtml(raw));

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outDir = path.join(root, lang);
  ensureDir(outDir);
  const outPath = path.join(outDir, `cv-${lang}.pdf`);
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
  });
  await page.close();
  console.log(`Generated ${outPath}`);
}

async function main() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    for (const lang of langs) {
      await generateForLang(browser, lang);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

