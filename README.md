This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🗺️ Flowchart Website & Struktur Script (A–Z)

Berikut adalah alur lengkap website ZORS CRAFT dari struktur halaman publik, komponen, form pengiriman brief, server action, penyimpanan data, hingga dashboard admin.

```mermaid
flowchart TD
    %% ─── ENTRY POINT ───
    START([🌐 Pengguna Buka Browser]) --> HOME

    %% ─── HALAMAN PUBLIK ───
    HOME["📄 Halaman Utama (/)\nsrc/app/page.tsx"]
    HOME --> SEC1["🎯 Seksi Hero\nsrc/components/sections/hero.tsx"]
    HOME --> SEC2["🛠️ Seksi Layanan\nsrc/components/sections/service.tsx"]
    HOME --> SEC3["💡 Seksi Solusi\nsrc/components/sections/solutions.tsx"]
    HOME --> SEC4["👥 Seksi Klien\nsrc/components/sections/clients.tsx"]
    HOME --> SEC5["⭐ Kenapa Zors?\nsrc/components/sections/why-zors.tsx"]
    HOME --> NAV["🔗 Navigasi Header\nsrc/components/custom/"]

    %% ─── NAVIGASI KE HALAMAN LAIN ───
    NAV --> ABOUT["📖 Tentang Kami (/about)\nsrc/app/about/"]
    NAV --> SERVICES["⚙️ Layanan (/services)\nsrc/app/services/"]
    NAV --> CASES["📂 Studi Kasus (/case-study)\nsrc/app/case-study/"]
    NAV --> STORIES["🗣️ Kisah Klien (/client-stories)\nsrc/app/client-stories/"]
    NAV --> CAREER["💼 Karir (/career)\nsrc/app/career/"]
    NAV --> CONTACT["📬 Kontak (/contact)\nsrc/app/contact/"]

    %% ─── HALAMAN LEGAL ───
    HOME --> LEGAL["📜 Halaman Legal"]
    LEGAL --> PRIVACY["🔒 Kebijakan Privasi (/privacy)"]
    LEGAL --> TERMS["📋 Syarat & Ketentuan (/terms)"]
    LEGAL --> DATAHANDLING["🗃️ Penanganan Data (/data-handling)"]

    %% ─── FORM BRIEF ───
    CONTACT --> FORM["📝 Form Project Brief\nsrc/components/forms/project-brief-form.tsx"]
    FORM --> INPUT["✍️ Pengguna Isi Form\n(Nama, Email, Budget, Deskripsi Proyek)"]
    INPUT --> VALIDATE["✅ Validasi Input Client-side"]
    VALIDATE -- "Data valid" --> ACTION
    VALIDATE -- "Data tidak valid" --> ERROR["❌ Tampilkan Pesan Error"]
    ERROR --> INPUT

    %% ─── SERVER ACTION ───
    ACTION["⚙️ Server Action dipanggil\nsrc/app/actions/contact.ts"]
    ACTION --> SERVERVALIDATE["🔍 Validasi Ulang di Server"]
    SERVERVALIDATE -- "Valid" --> SAVE
    SERVERVALIDATE -- "Tidak valid" --> RETURNERR["↩️ Kembalikan Error ke Form"]

    %% ─── PENYIMPANAN LOKAL ───
    SAVE["💾 Simpan ke File Lokal\ndata/briefs.json"]
    SAVE --> SUCCESS["✅ Tampilkan Pesan Sukses ke Pengguna"]
    SAVE --> JSONFILE[("📁 data/briefs.json\nDatabase Brief Lokal")]

    %% ─── ADMIN AREA ───
    JSONFILE --> ADMIN
    ADMIN["🔐 Dashboard Admin\n/admin/briefs\nsrc/app/admin/briefs/page.tsx"]
    ADMIN --> ADMINLAYOUT["🖥️ Layout Admin\nsrc/app/admin/layout.tsx"]
    ADMINLAYOUT --> CLIENTUI["🎛️ Antarmuka Admin (Client Component)\nsrc/app/admin/briefs/briefs-client.tsx"]
    CLIENTUI --> FILTERBRIEF["🔎 Filter Brief\n(Baru / Sudah Dibaca / Sudah Dibalas)"]
    FILTERBRIEF --> CARDDETAIL["🃏 Kartu Detail Brief\n(Nama, Email, Budget, Deskripsi)"]
    CARDDETAIL --> ACTIONS["⚡ Aksi Admin"]
    ACTIONS --> MARKREAD["👁️ Tandai Sudah Dibaca"]
    ACTIONS --> REPLY["📧 Balas via Email"]
    ACTIONS --> DELETE["🗑️ Hapus Brief"]
    MARKREAD --> JSONFILE
    DELETE --> JSONFILE

    %% ─── INFRASTRUKTUR ───
    subgraph INFRA ["🏗️ Infrastruktur & Konfigurasi"]
        direction LR
        CFG1["next.config.ts\nKonfigurasi Next.js"]
        CFG2["tailwind.config\nDesain & Styling"]
        CFG3["tsconfig.json\nTypeScript"]
        CFG4["robots.txt & sitemap.xml\nSEO"]
        CFG5["globals.css\nStyle Global"]
        CFG6[".gitignore\nAbaikan briefs.json"]
    end

    HOME -.->|"Dibangun di atas"| INFRA
```
