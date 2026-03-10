const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => {
        switch (msg.type()) {
            case 'error':
                console.error('Browser Error:', msg.text());
                break;
            case 'warning':
                console.warn('Browser Warning:', msg.text());
                break;
            default:
                console.log('Browser Log:', msg.text());
        }
    });
    page.on('pageerror', err => console.error('Browser Page Error:', err.toString()));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 2000));
    await browser.close();
})();
