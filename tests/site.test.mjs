import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');

const EXPECTED_FILES = [
  'index.html',
  '404.html',
  'robots.txt',
  'favicon.svg',
  'sitemap-index.xml',
  'pt-br/index.html',
  'en/index.html',
  'pt-br/projects/index.html',
  'en/projects/index.html',
  'pt-br/projects/ctrls-itsm/index.html',
  'en/projects/ctrls-itsm/index.html',
  'pt-br/projects/chamados-chesiquimica/index.html',
  'en/projects/chamados-chesiquimica/index.html',
  'pt-br/projects/rewit/index.html',
  'en/projects/rewit/index.html',
  'pt-br/projects/job-hunter/index.html',
  'en/projects/job-hunter/index.html',
  'pt-br/projects/ctrls-forms/index.html',
  'en/projects/ctrls-forms/index.html',
  'pt-br/projects/digital-professional-profiles/index.html',
  'en/projects/digital-professional-profiles/index.html',
  'pt-br/experience/index.html',
  'en/experience/index.html',
  'pt-br/skills/index.html',
  'en/skills/index.html',
  'pt-br/services/index.html',
  'en/services/index.html',
  'pt-br/about/index.html',
  'en/about/index.html',
  'pt-br/contact/index.html',
  'en/contact/index.html',
];

test('all expected static routes and assets exist in dist/', () => {
  for (const rel of EXPECTED_FILES) {
    const fullPath = path.join(DIST, rel);
    assert.ok(fs.existsSync(fullPath), `Missing built file: ${rel}`);
  }
});

test('bilingual pages contain canonical, hreflang, and Open Graph metadata', () => {
  for (const rel of ['pt-br/index.html', 'en/index.html', 'pt-br/projects/ctrls-itsm/index.html', 'en/projects/ctrls-itsm/index.html']) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.match(html, /<link rel="canonical" href="https:\/\/ctrls\.dev\.br\//);
    assert.match(html, /<link rel="alternate" hreflang="pt-BR"/);
    assert.match(html, /<link rel="alternate" hreflang="en"/);
    assert.match(html, /<meta property="og:title"/);
    assert.match(html, /<meta property="og:description"/);
  }
});

test('prohibited branding or inaccurate claims are absent from generated pages', () => {
  const pagesToCheck = [
    'pt-br/index.html',
    'en/index.html',
    'pt-br/projects/index.html',
    'en/projects/index.html',
    'pt-br/projects/ctrls-itsm/index.html',
    'en/projects/ctrls-itsm/index.html',
    'pt-br/projects/digital-professional-profiles/index.html',
    'en/projects/digital-professional-profiles/index.html',
  ];

  for (const rel of pagesToCheck) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.ok(!/inovare/i.test(html), `Prohibited clinic name found in ${rel}`);
    assert.ok(!/500 mensagens por minuto/i.test(html), `Inaccurate throughput claim in ${rel}`);
  }
});
