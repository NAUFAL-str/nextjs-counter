# Aplikasi Counter Next.js

Aplikasi penghitung angka sederhana yang dibuat menggunakan Next.js (App Router), TypeScript, dan React.

## Fitur

- Menambah angka dengan tombol `+1`
- Mengurangi angka dengan tombol `-1`
- Mengatur ulang angka ke `0` dengan tombol `Reset`
- Batas minimum nilai: `0`
- Batas maksimum nilai: `10`
- Nilai counter disimpan ke `localStorage` sehingga tidak hilang saat halaman di-refresh

## Teknologi yang Digunakan

- Next.js 16
- React 19
- TypeScript
- ESLint

## Cara Menjalankan Proyek

### 1) Clone repository

```bash
git clone https://github.com/NAUFAL-str/nextjs-counter.git
cd nextjs-counter
```

### 2) Install dependency

```bash
npm install
```

### 3) Jalankan server development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Daftar Script

- `npm run dev` - menjalankan server development
- `npm run build` - build aplikasi untuk production
- `npm run start` - menjalankan hasil build production
- `npm run lint` - menjalankan pengecekan lint

## Struktur Proyek

```text
nextjs-counter/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
  package.json
  tsconfig.json
```

## Perilaku Counter

- Nilai awal: `0`
- Nilai selalu dijaga pada rentang `0` sampai `10`
- Key `localStorage` yang digunakan: `simple-counter-value`

## Lisensi

Proyek ini dibuat untuk pembelajaran dan penggunaan pribadi.
