import { chromium } from 'playwright';

const browser = await chromium.launch();

const page = await browser.newPage({
  viewport: {
    width: 1200,
    height: 630,
  },
});

await page.goto('http://localhost:3000/lab/open-graph', {
  waitUntil: 'networkidle',
});

await page.evaluate(() => {
  const indicators = document.querySelectorAll('nextjs-portal');
  indicators.forEach((indicator) => indicator.remove());
});

await page.locator('#open-graph-card').screenshot({
  path: 'public/previews/atelier-open-graph.png',
});

await browser.close();

console.log('Created public/previews/atelier-open-graph.png');
