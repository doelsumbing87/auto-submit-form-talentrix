const puppeteer = require("puppeteer");
const fs = require("fs");
const { faker } = require("@faker-js/faker");

const WALLET_FILE = "wallets.txt";
const LOG_FILE = "log.txt";
const SCREENSHOT_DIR = "screenshots";
const SUBMITTED_FILE = "submitted_wallets.txt"; // Menyimpan wallet yang sudah diproses
const URL = "https://talentrix.wtf/airdrop";
const WAIT_TIME = 5000; // Waktu tunggu antar request

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
        console.error(`\u274C File ${WALLET_FILE} tidak ditemukan.`);
        process.exit(1);
    }
    return fs.readFileSync(WALLET_FILE, "utf-8").split("\n").filter(Boolean);
}

function loadSubmittedWallets() {
    if (!fs.existsSync(SUBMITTED_FILE)) {
        fs.writeFileSync(SUBMITTED_FILE, "");
    }
    return new Set(fs.readFileSync(SUBMITTED_FILE, "utf-8").split("\n").filter(Boolean));
}

function saveSubmittedWallet(wallet) {
    fs.appendFileSync(SUBMITTED_FILE, wallet + "\n");
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoSubmit(wallet, index) {
    if (submittedWallets.has(wallet)) {
        writeLog(`\u26A0 Wallet ${wallet} sudah pernah diproses, melewati...`);
        return;
    }

    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] });
    const page = await browser.newPage();

    try {
        writeLog(`\u2705 [${index + 1}] Memproses wallet: ${wallet}`);
        await page.goto(URL, { waitUntil: "domcontentloaded" });

        await page.waitForSelector("#name", { timeout: 10000 });
        await page.waitForSelector("#address", { timeout: 10000 });

        const submitButton = await page.$("#root > div > form > div:nth-child(3) > button");
        if (!submitButton) {
            writeLog(`\u274C Tombol submit tidak ditemukan untuk ${wallet}, mengambil screenshot.`);
            await page.screenshot({ path: `${SCREENSHOT_DIR}/error_${index}.png` });
            return;
        }

        const randomName = faker.person.firstName() + " " + faker.person.lastName();
        writeLog(`\u2705 Mengisi nama: ${randomName}`);

        await page.type("#name", randomName);
        await page.type("#address", wallet);

        await page.screenshot({ path: `${SCREENSHOT_DIR}/before_submit_${index}.png` });

        await submitButton.click();
        await delay(3000);

        await page.screenshot({ path: `${SCREENSHOT_DIR}/after_submit_${index}.png` });

        writeLog(`\u2705 [${index + 1}] Berhasil submit: ${wallet}`);
        saveSubmittedWallet(wallet);
    } catch (error) {
        writeLog(`\u274C Error pada wallet ${wallet}: ${error.message}`);
        await page.screenshot({ path: `${SCREENSHOT_DIR}/error_${index}.png` });
    } finally {
        await browser.close();
    }
}

(async () => {
    writeLog("\u2728 Memulai bot...");
    const wallets = loadWallets();
    submittedWallets = loadSubmittedWallets();
    writeLog(`\u2705 Ditemukan ${wallets.length} wallet.`);

    for (let i = 0; i < wallets.length; i++) {
        await autoSubmit(wallets[i], i);
        writeLog(`\u23F3 Menunggu ${WAIT_TIME / 1000} detik sebelum lanjut...`);
        await delay(WAIT_TIME);
    }

    writeLog("\u2728 Semua wallet telah diproses.");
})();
