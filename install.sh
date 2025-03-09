#!/bin/bash

sudo apt update && sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

sudo apt install -y libatk1.0-0 libasound2 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libgtk-3-0 libnss3 libgbm1

if [ ! -d "talentrix-bot" ]; then
    git clone https://github.com/doelsumbing87/talentrix-bot.git
fi
cd talentrix-bot

npm install puppeteer fs @faker-js/faker

echo "✅ Instalasi selesai! Jalankan bot dengan: node bot.js"
