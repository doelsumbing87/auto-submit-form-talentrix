from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import random
import string


print("""
===========================================
         TALENTRIX AUTO BOT
     Created by: DOEL | GitHub: https://github.com/doelsumbing87
===========================================
""")


def load_wallets(filename="wallets.txt"):
    with open(filename, "r") as file:
        wallets = [line.strip() for line in file.readlines() if line.strip()]
    return wallets


def random_name(length=8):
    return ''.join(random.choices(string.ascii_letters, k=length))


options = webdriver.ChromeOptions()
options.add_argument("--headless") 
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(options=options)

def auto_submit(wallet_address):
    try:
        driver.get("https://talentrix.wtf/airdrop")
        time.sleep(3)  

        
        name_input = driver.find_element(By.XPATH, "/html/body/div/div/form/div[1]/input")
        name_input.send_keys(random_name())
        time.sleep(1)

        
        wallet_input = driver.find_element(By.XPATH, "/html/body/div/div/form/div[2]/input")
        wallet_input.send_keys(wallet_address)
        time.sleep(1)

        
        submit_button = driver.find_element(By.XPATH, "/html/body/div/div/form/div[3]/button")
        submit_button.click()
        time.sleep(3)

        print(f"[DOEL BOT] ✅ Form berhasil disubmit untuk wallet: {wallet_address}")
    except Exception as e:
        print(f"[DOEL BOT] ❌ Terjadi kesalahan: {e}")

def main():
    wallets = load_wallets()
    for wallet in wallets:
        print(f"[DOEL BOT] 🚀 Memproses wallet: {wallet}")
        auto_submit(wallet)
        time.sleep(random.randint(2, 5))  # Ubah Jeda Sesuai Seleramu :)
    driver.quit()
    print("\n===========================================")
    print("        Semua wallet telah diproses! ✅")
    print("    Created by: DOEL | GitHub: https://github.com/doelsumbing87")
    print("===========================================\n")

if __name__ == "__main__":
    main()
