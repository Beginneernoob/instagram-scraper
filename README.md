# Instagram Scraper

Proyek ini adalah aplikasi web untuk melakukan scraping data dari Instagram menggunakan API. Pengguna dapat memasukkan username Instagram dan memilih jenis data yang ingin diambil, seperti informasi akun, followers, following, atau highlights. Hasil scraping akan disimpan dalam format JSON dan dapat diunduh langsung dari web.

## Fitur

- Scrape informasi dasar dari pengguna Instagram.
- Scrape followers dari pengguna Instagram.
- Scrape following dari pengguna Instagram.
- Scrape highlights dari pengguna Instagram.
- Scrape posts dari pengguna Instagram.
- Scrape stories dari pengguna Instagram.

## Instalasi

1. Clone repositori ini:
    ```sh
    git clone https://github.com/Beginneernoob/instagram-scraper.git
    ```

2. Pindah ke direktori proyek:
    ```sh
    cd instagram-scraper
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Buat file `.env` dan tambahkan kunci API Anda:
    ```sh
    touch .env
    ```

5. Tambahkan variabel lingkungan berikut ke dalam file `.env`:
    ```
    RAPIDAPI_KEY=YOUR_APIKEY
    RAPIDAPI_HOST=instagram-scraper-api2.p.rapidapi.com

6. Buat apikey [Disini](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2)
    ```

## Penggunaan

1. Jalankan server:
    ```sh
    npm start
    ```

2. Buka browser dan akses `http://localhost:3000`.

3. Masukkan username Instagram dan pilih jenis data yang ingin di-scrape, lalu klik tombol "Scrape".

4. Hasil akan ditampilkan di halaman web dan akan otomatis diunduh sebagai file JSON.

## Struktur Proyek

- `public/`
  - `index.html`: Halaman utama aplikasi web.
  - `styles.css`: File CSS untuk styling halaman web.
  - `script.js`: File JavaScript untuk mengatur interaksi halaman web.

- `server.js`: File server utama untuk menangani permintaan API.

## Dependencies

- express
- axios
- dotenv
