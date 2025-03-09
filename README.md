# Talentrix Airdrop Bot

Bot otomatis untuk mengisi formulir airdrop Talentrix dengan alamat dompet Solana.

## Fitur
- Menghasilkan nama acak yang menyerupai nama asli.
- Log debugging dan tangkapan layar otomatis untuk verifikasi.
- Mendukung Linux dan Windows.
- Menggunakan Puppeteer untuk otomatisasi web.
- Cek duplikasi: Tidak akan mengirim ulang alamat dompet yang sudah diproses sebelumnya.

## Prasyarat
Pastikan perangkat Anda telah terinstal:

- **Node.js** (versi 20 atau lebih baru)
- **NPM** (Node Package Manager)
- **Chromium atau Google Chrome** (untuk otomatisasi web)
- **Puppeteer** (untuk menjalankan bot dengan Chromium)

## Instalasi

### Instalasi Cepat (Linux)
Jalankan perintah berikut untuk menginstal semua dependensi sekaligus:
```sh
chmod +x install.sh && ./install.sh
```

### Instalasi Manual (Linux Ubuntu/Debian)
```sh
# Perbarui paket sistem
sudo apt update && sudo apt upgrade -y

# Instal Node.js dan npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Instal dependensi yang diperlukan untuk Chromium
sudo apt install -y libatk1.0-0 libasound2 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libgtk-3-0 libnss3 libgbm1
```

### Instalasi di Windows
1. **Instal Node.js:** Unduh dan instal [Node.js](https://nodejs.org/).
2. **Instal Google Chrome:** Unduh dan instal [Google Chrome](https://www.google.com/chrome/).

## Clone Repositori
```sh
git clone https://github.com/doelsumbing87/talentrix-bot.git
cd talentrix-bot
```

## Instal Dependensi
```sh
npm install puppeteer fs @faker-js/faker
```

## Konfigurasi
1. **Edit `wallets.txt`** dan masukkan alamat dompet Solana, satu per baris.
2. **(Opsional) Konfigurasi mode headless**
   - Buka `bot.js`
   - Ubah `headless: false` menjadi `headless: true` jika ingin menjalankan bot di latar belakang.

## Menjalankan Bot
```sh
node bot.js
```

## Debugging & Log
- Bot secara otomatis mengambil tangkapan layar sebelum dan sesudah pengiriman.
- Log akan ditampilkan di konsol dan disimpan dalam `log.txt`.
- Jika terjadi error, cek folder `screenshots/` untuk melihat tangkapan layar kesalahan.

## Troubleshooting
**Masalah Umum & Solusi:**
- **Error: `chromium` gagal diluncurkan** → Pastikan semua dependensi yang diperlukan telah diinstal.
- **Form tidak ditemukan?** → Jalankan dengan `headless: false` untuk melihat apa yang terjadi.
- **Alamat dompet sudah dikirim sebelumnya?** → Bot otomatis melewati alamat yang sudah pernah dikirim.

## Lisensi
Proyek ini hanya untuk tujuan edukasi. Gunakan dengan risiko sendiri.

---
🚀 Dikembangkan oleh [ABBEEY](https://github.com/doelsumbing87)
