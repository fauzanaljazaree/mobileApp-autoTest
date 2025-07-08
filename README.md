# 📱 Mobile App Auto Testing – Appium + WebdriverIO (ESM)

Proyek ini adalah implementasi automated testing pada aplikasi Android **API Demos** menggunakan **Appium v2** dan **WebdriverIO v8** dengan format module **ESM**. Tes dijalankan pada emulator atau perangkat fisik Android, dengan laporan hasil uji berbasis **Allure Report**.

---

## 📦 Struktur Direktori

```

mobileApp-autoTest/
│
├── test/
│   └── appdemo.test.js          # Script pengujian untuk API Demos App
│
├── .gitignore                   # File untuk mengabaikan folder atau file tertentu
├── package.json                # Konfigurasi project dan dependensi
├── wdio.conf.js                # Konfigurasi WebdriverIO untuk Appium
└── readme.md                   # Dokumentasi proyek ini

````

---

## 🚀 Tujuan Proyek

- Melakukan **automated UI testing** pada aplikasi Android *API Demos*.
- Menyusun flow interaksi pengguna: navigasi menu, input teks, validasi elemen.
- Menghasilkan laporan uji otomatis menggunakan Allure.

---

## 🧩 Prasyarat

Pastikan lingkungan lokal Anda sudah memenuhi kebutuhan berikut:

| Kebutuhan        | Versi/Detail                     |
|------------------|----------------------------------|
| Node.js          | ≥ 14.x                           |
| NPM              | ≥ 6.x                            |
| Appium           | ^2.3.0 (global atau lokal)       |
| Java JDK         | ≥ 8 (untuk Android SDK)          |
| Android SDK      | Sudah dikonfigurasi dan ADB jalan |
| Perangkat        | Emulator Android atau device fisik |
| App APK          | [API Demos APK](https://github.com/appium/appium/blob/master/packages/appium/sample-code/apps/ApiDemos-debug.apk) |

---

## 🛠️ Instalasi dan Setup

1. **Clone repo ini dan masuk ke direktori:**
   ```bash
   git clone https://github.com/fauzanaljazaree/mobileApp-autoTest
   cd mobileApp-autoTest
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Download dan siapkan APK:**

   * Download [ApiDemos-debug.apk](https://github.com/appium/appium/blob/master/packages/appium/sample-code/apps/ApiDemos-debug.apk)
   * Pastikan file APK tersedia di emulator/device
   * Pastikan device aktif dan terdeteksi oleh ADB:

     ```bash
     adb devices
     ```

4. **(Opsional) Ubah konfigurasi device di `wdio.conf.js` jika perlu:**

   ```js
   "appium:deviceName": "YOUR_DEVICE_ID", // ganti dengan adb device id kamu
   "appium:platformVersion": "YOUR_ANDROID_VERSION",
   ```

---

## ▶️ Menjalankan Test Case

Untuk menjalankan semua test case:

```bash
npm run test
```

Ini akan menjalankan seluruh script di dalam folder `test/` menggunakan konfigurasi di `wdio.conf.js`.

---

## 📊 Generate & Lihat Laporan Allure

Setelah test selesai, kamu bisa menghasilkan dan membuka laporan uji:

### 1. **Generate laporan Allure**

```bash
npm run generateReport
```

### 2. **Buka laporan dalam browser**

```bash
npm run openReport
```

Laporan akan terbuka secara otomatis di browser default.

---

## 🧼 .gitignore (Singkat)

```gitignore
node_modules/
package-lock.json
allure-results/
.allure
allure-report/
```

---

## 📚 Referensi

* [Appium Docs](https://appium.io/docs/en/about-appium/intro/)
* [WebdriverIO Docs](https://webdriver.io/)
* [Allure Reports](https://docs.qameta.io/allure/)
* [APK: API Demos](https://github.com/appium/appium/blob/master/packages/appium/sample-code/apps/ApiDemos-debug.apk)

---

## 👨‍💻 Pengembang

Proyek ini dikembangkan oleh QA Engineer untuk demonstrasi dan eksplorasi otomatisasi UI testing menggunakan ekosistem Appium + WebdriverIO.

---

## 🛠 Tips Troubleshooting

| Masalah                        | Solusi                                                               |
| ------------------------------ | -------------------------------------------------------------------- |
| `Error: device not found`      | Pastikan emulator/device sudah aktif dan terdeteksi dengan `adb`     |
| `browser is not defined`       | Jangan panggil `browser` di luar scope `it()` atau `before/after()`  |
| `Appium server tidak merespon` | Pastikan Appium server aktif di `localhost:4723`                     |
| APK tidak terbuka              | Periksa konfigurasi `appPackage` dan `appActivity` di `wdio.conf.js` |

---
