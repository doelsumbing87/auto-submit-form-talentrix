# Talentrix Auto Submit Bot

## 📌 Introduction
Talentrix Auto Submit Bot is an automated script built using **Node.js & Puppeteer** to streamline the wallet submission process for Talentrix Airdrop. The bot automatically fills out the form with a random name and wallet address and submits it efficiently.

---

## ⚡ Features
- **Automated Form Submission**: Fills and submits forms without manual input.
- **Random Name Generation**: Uses `@faker-js/faker` to generate unique names.
- **Error Handling**: Captures errors and logs them.
- **Screenshots on Failure**: Saves screenshots for debugging purposes.
- **Configurable Wait Time**: Ensures compliance with request rate limits.

---

## 🔧 Requirements
Ensure you have the following dependencies installed before running the bot:

### **System Requirements**
- **Operating System**: Ubuntu / Debian / macOS / Windows
- **Node.js**: v18+ (Recommended: v20+)
- **npm**: v8+

### **Dependencies**
The bot requires the following Node.js packages:
- **puppeteer**: Automates browser interactions.
- **@faker-js/faker**: Generates random names.
- **fs**: Handles file system operations.

To install dependencies, run:
```sh
npm install
```

---

## 🚀 Installation Guide

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/doelsumbing87/talentrix-bot.git
cd talentrix-bot
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Prepare Wallet Data**
Create a file named `wallets.txt` in the root directory and add wallet addresses (one per line):
```
.........
.........
.........

...
```

---

## 🏃 Running the Bot

To start the bot, run:
```sh
node bot.js
```

The bot will:
1. Read wallet addresses from `wallets.txt`
2. Generate a random name for each wallet
3. Submit the form on the Talentrix Airdrop page
4. Log successes and failures
5. Take screenshots of errors (if any) in `screenshots/`

---

## 📜 Logging & Debugging
- All logs are saved in `log.txt`.
- Screenshots of failed submissions are stored in the `screenshots/` directory.

---

## 🔥 Troubleshooting
**1. Puppeteer installation issues?**  
Try installing Chrome manually:
```sh
apt update && apt install -y chromium-browser
```
Then run Puppeteer with:
```sh
PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser" node bot.js
```

**2. Error: `No element found for selector`?**  
The page might have changed. Ensure the form structure is still the same.

---

## 📄 License
This project is licensed under the **MIT License**. Feel free to modify and distribute it.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📩 Contact
For issues or questions, feel free to reach out:
- **GitHub**: [@doelsumbing87](https://github.com/doelsumbing87)

