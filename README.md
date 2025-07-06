# 📱 Mobile App Auto Testing – Appium + WebdriverIO (ESM)

Proyek ini adalah implementasi automated testing pada aplikasi Android **API Demos** menggunakan **Appium v2** dan **WebdriverIO v8** dengan format module **ESM**. Tes dijalankan pada emulator atau perangkat fisik Android, dengan laporan hasil uji berbasis **Allure Report**.

---

## 📦 Struktur Direktori

mobileApp-autoTest/
│
├── test/
│ └── appdemo.test.js # Script pengujian untuk API Demos App
│
├── .gitignore # File untuk mengabaikan folder atau file tertentu
├── package.json # Konfigurasi project dan dependensi
├── wdio.conf.js # Konfigurasi WebdriverIO untuk Appium
└── readme.md # Dokumentasi proyek ini

yaml
Salin
Edit

---

## 🚀 Tujuan Proyek

- Melakukan **automated UI testing** pada aplikasi Android _API Demos_.
- Menyusun flow interaksi pengguna: navigasi menu, input teks, validasi elemen.
- Menghasilkan laporan uji otomatis menggunakan Allure.

---

## 🧩 Prasyarat

Pastikan lingkungan lokal Anda sudah memenuhi kebutuhan berikut:

| Kebutuhan   | Versi/Detail                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| Node.js     | ≥ 14.x                                                                                                            |
| NPM         | ≥ 6.x                                                                                                             |
| Appium      | ^2.3.0 (global atau lokal)                                                                                        |
| Java JDK    | ≥ 8 (untuk Android SDK)                                                                                           |
| Android SDK | Sudah dikonfigurasi dan ADB jalan                                                                                 |
| Perangkat   | Emulator Android atau device fisik                                                                                |
| App APK     | [API Demos APK](https://github.com/appium/appium/blob/master/packages/appium/sample-code/apps/ApiDemos-debug.apk) |

---

## 🛠️ Instalasi dan Setup

1. **Clone repo ini dan masuk ke direktori:**
   ```bash
   git clone <repo-url>
   cd mobileApp-autoTest
   Install dependencies:
   ```

bash
Salin
Edit
npm install
Download dan siapkan APK:

Download ApiDemos-debug.apk

Pastikan file APK tersedia di emulator/device

Pastikan device aktif dan terdeteksi oleh ADB:

bash
Salin
Edit
adb devices
(Opsional) Ubah konfigurasi device di wdio.conf.js jika perlu:

js
Salin
Edit
"appium:deviceName": "YOUR_DEVICE_ID", // ganti dengan adb device id kamu
"appium:platformVersion": "YOUR_ANDROID_VERSION",
▶️ Menjalankan Test Case
Untuk menjalankan semua test case:

bash
Salin
Edit
npm run test
Ini akan menjalankan seluruh script di dalam folder test/ menggunakan konfigurasi di wdio.conf.js.

📊 Generate & Lihat Laporan Allure
Setelah test selesai, kamu bisa menghasilkan dan membuka laporan uji:

1. Generate laporan Allure
   bash
   Salin
   Edit
   npm run generateReport
2. Buka laporan dalam browser
   bash
   Salin
   Edit
   npm run openReport
   Laporan akan terbuka secara otomatis di browser default.

🧼 .gitignore (Singkat)
gitignore
Salin
Edit
node_modules/
package-lock.json
allure-results/
.allure
allure-report/
📚 Referensi
Appium Docs

WebdriverIO Docs

Allure Reports

APK: API Demos

👨‍💻 Pengembang
Proyek ini dikembangkan oleh QA Engineer untuk demonstrasi dan eksplorasi otomatisasi UI testing menggunakan ekosistem Appium + WebdriverIO.
