const puppeteer = require("puppeteer");
const fs = require("fs");
const { faker } = require("@faker-js/faker");

const WALLET_FILE = "wallets.txt";
const LOG_FILE = "log.txt";
const SCREENSHOT_DIR = "screenshots";
const URL = "https://talentrix.wtf/airdrop";
const WAIT_TIME = 5000; // 5 detik antar request bisa custom sesuai selera


if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR);
}


function writeLog(message) {
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFileSync(LOG_FILE, logMessage);
    console.log(message);
}


function loadWallets() {
    if (!fs.existsSync(WALLET_FILE)) {
        console.error(`? File ${WALLET_FILE} tidak ditemukan.`);
        process.exit(1);
    }
    return fs.readFileSync(WALLET_FILE, "utf-8").split("\n").filter(Boolean);
}


async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function autoSubmit(wallet, index) {
    const browser = await puppeteer.launch({ headless: false, args: ["--no-sandbox"] });
    const page = await browser.newPage();

    try {
        writeLog(`?? [${index + 1}] Memproses wallet: ${wallet}`);

        await page.goto(URL, { waitUntil: "domcontentloaded" });

        
        await page.waitForSelector("#name");
        await page.waitForSelector("#address");
        await page.waitForSelector("#root > div > form > div:nth-child(3) > button");

        
        const randomName = faker.person.firstName() + " " + faker.person.lastName();
        writeLog(`?? Mengisi nama: ${randomName}`);

        
        await page.type("#name", randomName);
        await page.type("#address", wallet);

        
        await page.screenshot({ path: `${SCREENSHOT_DIR}/before_submit_${index}.png` });

        
        await page.click("#root > div > form > div:nth-child(3) > button");

        
        await delay(3000);

        
        await page.screenshot({ path: `${SCREENSHOT_DIR}/after_submit_${index}.png` });

        writeLog(`? [${index + 1}] Berhasil submit: ${wallet}`);
    } catch (error) {
        writeLog(`? Error pada wallet ${wallet}: ${error.message}`);
    } finally {
        await browser.close();
    }
}


(async () => {
    writeLog("?? Memulai bot...");
    const wallets = loadWallets();
    writeLog(`?? Ditemukan ${wallets.length} wallet.`);

    for (let i = 0; i < wallets.length; i++) {
        await autoSubmit(wallets[i], i);
        writeLog(`? Menunggu ${WAIT_TIME / 1000} detik sebelum lanjut...`);
        await delay(WAIT_TIME);
    }

    writeLog("?? Semua wallet telah diproses.");
})();
