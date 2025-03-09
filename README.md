# Talentrix Bot

Talentrix Bot adalah bot otomatis berbasis Selenium yang dirancang untuk membantu mengelola dan mengotomatisasi tugas tertentu secara efisien. Proyek ini berjalan di lingkungan Linux dengan dukungan Google Chrome dan ChromeDriver.

## 🚀 Fitur
- **Otomasi penuh** menggunakan Selenium
- **Dukungan Multi-Threading** untuk performa maksimal
- **Logging dan Error Handling** bawaan
- **Mudah dikonfigurasi** dengan `.env` file

## 📌 Prasyarat
Sebelum menjalankan bot ini, pastikan sistem telah memiliki:
- **Linux VPS / Ubuntu 20.04+**
- **Python 3.12+**
- **Google Chrome (Versi terbaru)**
- **ChromeDriver (Sesuai versi Chrome)**
- **Git & Virtual Environment**

## ⚙️ Instalasi
Ikuti langkah-langkah berikut untuk menginstal bot di VPS:

### 1️⃣ Clone Repository
```bash
git clone https://github.com/doelsumbing87/talentrix-bot.git
cd talentrix-bot
```

### 2️⃣ Buat Virtual Environment & Install Dependencies
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3️⃣ Install Google Chrome & ChromeDriver
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt install ./google-chrome-stable_current_amd64.deb -y
CHROME_VERSION=$(google-chrome --version | awk '{print $3}' | cut -d'.' -f1)
wget https://storage.googleapis.com/chrome-for-testing-public/$CHROME_VERSION/linux64/chromedriver-linux64.zip
unzip chromedriver-linux64.zip
mv chromedriver-linux64/chromedriver /usr/local/bin/
chmod +x /usr/local/bin/chromedriver
```

## ▶️ Menjalankan Bot

### **Jalankan bot dengan perintah berikut:**
```bash
source venv/bin/activate
python bot.py
```

Jika ingin menjalankan bot di **background**:
```bash
nohup python bot.py &
```

Untuk melihat log bot:
```bash
tail -f nohup.out
```

## 🛠 Troubleshooting
Jika mengalami error, cek langkah-langkah berikut:
- **Cek versi Chrome & ChromeDriver:**
  ```bash
  google-chrome --version
  chromedriver --version
  ```
- **Pastikan virtual environment aktif sebelum menjalankan bot:**
  ```bash
  source venv/bin/activate
  ```
- **Jika error `chromedriver not found`, pastikan telah menginstal dengan benar.**

## 💡 Kontribusi
Jika ingin berkontribusi, silakan fork repository ini dan buat pull request dengan perubahan yang diusulkan.

## 📜 Lisensi
Proyek ini dilisensikan di bawah **MIT License**. Silakan baca `LICENSE` untuk detail lebih lanjut.

---

🚀 **Talentrix Bot - Automate Your Workflow, Enhance Your Productivity!**

