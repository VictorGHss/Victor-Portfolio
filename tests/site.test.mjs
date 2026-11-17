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
  'og-image.png',
  'sitemap-index.xml',
  'resume/victor-gabriel-cv-pt-br.pdf',
  'resume/victor-gabriel-resume-en.pdf',
  'images/projects/portal-clinico/cartao-profissional-alisson.png',
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

test('all expected static routes, resumes, and assets exist in dist/', () => {
  for (const rel of EXPECTED_FILES) {
    const fullPath = path.join(DIST, rel);
    assert.ok(fs.existsSync(fullPath), `Missing built file: ${rel}`);
  }
});

test('bilingual pages contain consistent canonical, hreflang, and Open Graph metadata', () => {
  for (const rel of [
    'pt-br/index.html',
    'en/index.html',
    'pt-br/projects/ctrls-itsm/index.html',
    'en/projects/ctrls-itsm/index.html',
  ]) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.match(html, /<link rel="canonical" href="https:\/\/victorghss-portfolio\.ctrls\.dev\.br\//);
    assert.match(html, /<link rel="alternate" hreflang="pt-BR"/);
    assert.match(html, /<link rel="alternate" hreflang="en"/);
    assert.match(html, /<meta property="og:title"/);
    assert.match(html, /<meta property="og:description"/);
    assert.match(
      html,
      /<meta property="og:image" content="https:\/\/victorghss-portfolio\.ctrls\.dev\.br\/og-image\.png"/
    );
  }
});

test('audio controls are removed and CTRLS ITSM is clearly concluded/deactivated', () => {
  const neutralProjectPages = [
    'pt-br/projects/index.html',
    'en/projects/index.html',
    'pt-br/projects/ctrls-itsm/index.html',
    'en/projects/ctrls-itsm/index.html',
  ];

  for (const rel of ['pt-br/projects/ctrls-itsm/index.html', 'en/projects/ctrls-itsm/index.html']) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.ok(!/inovare/i.test(html), `Organization name found in ${rel}`);
  }

  for (const rel of neutralProjectPages) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.ok(!/ciclo encerrado \/ em uso/i.test(html), `Contradictory active badge in ${rel}`);
  }

  for (const rel of ['pt-br/index.html', 'en/index.html', ...neutralProjectPages]) {
    const html = fs.readFileSync(path.join(DIST, rel), 'utf8');
    assert.ok(!/SOM:\s*OFF|SOUND:\s*OFF|AudioController/i.test(html), `Audio UI remnant found in ${rel}`);
  }
});

test('career timeline, MCT Cursos education, collaboration credit, and Portal Clinico link are accurate', () => {
  const ptExp = fs.readFileSync(path.join(DIST, 'pt-br/experience/index.html'), 'utf8');
  const enExp = fs.readFileSync(path.join(DIST, 'en/experience/index.html'), 'utf8');
  const ptAbout = fs.readFileSync(path.join(DIST, 'pt-br/about/index.html'), 'utf8');
  const ptChes = fs.readFileSync(path.join(DIST, 'pt-br/projects/chamados-chesiquimica/index.html'), 'utf8');
  const ptPortal = fs.readFileSync(path.join(DIST, 'pt-br/projects/digital-professional-profiles/index.html'), 'utf8');

  assert.match(ptExp, /Outubro de 2026/);
  assert.match(enExp, /October 2026/);
  assert.ok(!/Janeiro de 2025\s*[—–-]\s*Presente/i.test(ptExp));
  assert.ok(!/January 2025\s*[—–-]\s*Present/i.test(enExp));
  assert.ok(!/8 meses|oito meses|eight months/i.test(ptExp));

  assert.match(ptAbout, /MCT Cursos/);
  assert.match(ptAbout, /2021/);
  assert.match(ptChes, /João Gabriel Anjos/);
  assert.match(ptPortal, /https:\/\/inovare\.doctors\.ctrls\.dev\.br\/m\/alisson-fucio/);
  assert.match(ptPortal, /cartao-profissional-alisson\.png/);

  const ptHome = fs.readFileSync(path.join(DIST, 'pt-br/index.html'), 'utf8');
  const enHome = fs.readFileSync(path.join(DIST, 'en/index.html'), 'utf8');
  assert.ok(!/class="desktop-nav"/.test(ptHome), 'Redundant desktop-nav still present in header');
  assert.ok(!/instagram\.com/i.test(ptHome) && !/instagram\.com/i.test(enHome), 'Instagram should not be included');
});
