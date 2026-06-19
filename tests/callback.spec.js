const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://test.netlify.app/';

const SELECTORS = {
    nameInput: 'input[name="name"]',
    emailInput: 'input[name="email"]',
    phoneInput: 'input[name="phone"]',
    companyInput: 'input[name="company"]',
    websiteInput: 'input[name="website"]',
    employeesSelect: 'select',
    requestCallbackButton: 'text=Request a call back'
};

const TEST_DATA = {
    name: 'Raz Eliyahu',
    email: 'raz@example.com',
    phone: '0501234567',
    company: 'Jones Test Company',
    website: 'https://example.com',
    employees: '51-500'
};

const screenshotsDir = path.join(__dirname, '..', 'screenshots');
const logsDir = path.join(__dirname, '..', 'logs');

const screenshotPath = path.join(screenshotsDir, 'before-submit.png');
const errorScreenshotPath = path.join(screenshotsDir, 'error-state.png');
const logFilePath = path.join(logsDir, 'automation.log');

fs.mkdirSync(screenshotsDir, { recursive: true });
fs.mkdirSync(logsDir, { recursive: true });

function writeLog(message) {
    const logLine = `[${new Date().toISOString()}] ${message}`;
    console.log(message);
    fs.appendFileSync(logFilePath, logLine + '\n');
}

(async () => {
    let browser;

    try {
        browser = await chromium.launch({
            headless: false,
            slowMo: 1000
        });

        const page = await browser.newPage();

        writeLog('Opening website');
        await page.goto(BASE_URL, {
            waitUntil: 'domcontentloaded'
        });

        writeLog('Filling form fields');
        await page.fill(SELECTORS.nameInput, TEST_DATA.name);
        await page.fill(SELECTORS.emailInput, TEST_DATA.email);
        await page.fill(SELECTORS.phoneInput, TEST_DATA.phone);
        await page.fill(SELECTORS.companyInput, TEST_DATA.company);
        await page.fill(SELECTORS.websiteInput, TEST_DATA.website);

        writeLog('Changing Number of Employees to 51-500');
        await page.selectOption(SELECTORS.employeesSelect, {
            label: TEST_DATA.employees
        });

        writeLog('Taking screenshot before submit');
        await page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        writeLog('Clicking Request a call back button');
        await page.click(SELECTORS.requestCallbackButton);

        await page.waitForURL(/thank/i, {
            timeout: 10000
        });

        writeLog('SUCCESS: Reached the thank you page');
    } catch (error) {
        writeLog('FAILED: Automation test failed');
        writeLog(error.message);

        try {
            if (browser) {
                const pages = browser.contexts()[0]?.pages();
                const page = pages && pages[0];

                if (page && !page.isClosed()) {
                    await page.screenshot({
                        path: errorScreenshotPath,
                        fullPage: true
                    });

                    writeLog('Error screenshot saved');
                }
            }
        } catch (screenshotError) {
            writeLog('Failed to save error screenshot');
        }
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();