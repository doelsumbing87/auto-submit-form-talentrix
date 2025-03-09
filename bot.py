from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import random
import string

# Fungsi untuk membaca daftar wallet dari file
def load_wallets(filename="wallets.txt"):
    with open(filename, "r") as file:
        wallets = [line.strip() for line in file.readlines() if line.strip()]
    return wallets

# Fungsi untuk generate nama random
def random_name(length=8):
    return ''.join(random.choices(string.ascii_letters, k=length))

# Konfigurasi Selenium
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Agar berjalan di background
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(options=options)

def auto_submit(wallet_address):
    try:
        driver.get("https://talentrix.wtf/airdrop")
        time.sleep(3)  # Tunggu loading

        # Mengisi input nama dengan random name
        name_input = driver.find_element(By.XPATH, "/html/body/div/div/form/div[1]/input")
        name_input.send_keys(random_name())
        time.sleep(1)

        # Mengisi wallet address
        wallet_input = driver.find_element(By.XPATH, "/html/body/div/div/form/div[2]/input")
        wallet_input.send_keys(wallet_address)
        time.sleep(1)

        # Klik tombol submit
        submit_button = driver.find_element(By.XPATH, "/html/body/div/div/form/div[3]/button")
        submit_button.click()
        time.sleep(3)

        print(f"Form berhasil disubmit untuk wallet: {wallet_address}")
    except Exception as e:
        print(f"Terjadi kesalahan: {e}")

def main():
    wallets = load_wallets()
    for wallet in wallets:
        auto_submit(wallet)
        time.sleep(random.randint(2, 5))  # Jeda acak agar tidak terdeteksi spam
    driver.quit()
    print("Semua wallet telah diproses!")

if __name__ == "__main__":
    main()
