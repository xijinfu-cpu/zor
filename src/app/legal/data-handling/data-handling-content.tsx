"use client";

import LegalLayout, { LegalSection } from "@/components/custom/legal-layout";
import { useLang } from "@/lib/language-context";

interface DataHandlingData {
    title: string;
    subtitle: string;
    lastUpdated: string;
    opening: string;
    importantNotice: {
        title: string;
        content: string;
    };
    sections: LegalSection[];
}

const dataHandlingData: Record<"en" | "id", DataHandlingData> = {
    en: {
        title: "Data Handling",
        subtitle: "How we treat the information entrusted to us.",
        lastUpdated: "4 October 2026",
        opening: "Client data is part of the trust behind every project. This page describes the principles ZORS CRAFT follows when receiving, accessing, storing, sharing, and removing information provided to us during project discovery, design, development, support, and other professional engagements.",
        importantNotice: {
            title: "Production Data Principle",
            content: "We strictly avoid using live customer production data in development or staging environments. Anonymized mock data is enforced across all engineering pipelines.",
        },
        sections: [
            {
                number: "01",
                title: "Purpose First",
                content: "We request and use project information only when it has a clear purpose related to understanding, delivering, maintaining, or supporting the agreed work.",
            },
            {
                number: "02",
                title: "Minimum Necessary Access",
                content: "Team members and approved collaborators should access only the information reasonably necessary for their specific responsibilities.",
            },
            {
                number: "03",
                title: "Client Credentials",
                content: "Where project access credentials are required, we encourage the use of dedicated project accounts, role-based permissions, temporary access, and secure credential-sharing methods rather than sending passwords through ordinary messages.",
                callout: "Security Recommendation: We recommend sharing API keys, database credentials, and server passwords through end-to-end encrypted secret vaults rather than plaintext chat.",
            },
            {
                number: "04",
                title: "Storage",
                content: "Project files and information may be stored in approved systems used for communication, design, development, documentation, hosting, or project management. We aim to avoid unnecessary duplication of confidential information across tools.",
            },
            {
                number: "05",
                title: "Third-Party Platforms",
                content: "Some projects require third-party platforms, cloud providers, hosting providers, repositories, analytics tools, or other external services. Where they are required, access should be limited to the project purpose and governed by the relevant provider terms and any applicable client agreement.",
            },
            {
                number: "06",
                title: "Confidential Information",
                content: "Information identified as confidential, or which is reasonably understood to be confidential, should not be disclosed outside the project team except where authorized, contractually required, or legally required.",
            },
            {
                number: "07",
                title: "Production Data",
                content: "We avoid using real production or personal data for development and testing when realistic alternatives such as dummy, masked, or anonymized data can reasonably be used.",
                callout: "Environment Isolation: Development, staging, and preview environments are strictly decoupled from production client databases.",
            },
            {
                number: "08",
                title: "Backups and Copies",
                content: "Temporary copies, exported files, and backups should be limited to what is reasonably necessary for project delivery, recovery, or contractual obligations.",
            },
            {
                number: "09",
                title: "Project Completion",
                content: "After project completion, access rights should be reviewed. Credentials, repositories, accounts, and files should be transferred, retained, archived, or removed according to the project agreement and legitimate operational or legal requirements.",
            },
            {
                number: "10",
                title: "Incident Handling",
                content: "If we become aware of a security or data incident affecting information entrusted to ZORS CRAFT, we will assess the situation, take reasonable steps to contain the issue, document relevant facts, and communicate with affected clients or parties where appropriate or legally required.",
            },
            {
                number: "11",
                title: "Client Responsibilities",
                content: "Secure projects are a shared responsibility. Clients should maintain appropriate access controls, avoid unnecessary sharing of sensitive credentials, keep authorized contacts current, and promptly inform ZORS CRAFT when access should change or be revoked.",
            },
            {
                number: "12",
                title: "Questions",
                content: "Questions or audits regarding project data handling can be sent to hello@zorscraft.id.",
            },
        ],
    },
    id: {
        title: "Penanganan Data",
        subtitle: "Prinsip dan standar pengamanan data proyek yang dipercayakan kepada kami.",
        lastUpdated: "4 Oktober 2026",
        opening: "Data klien adalah pondasi kepercayaan dalam setiap kolaborasi. Halaman ini menjelaskan standar baku yang diterapkan ZORS CRAFT saat menerima, mengakses, menyimpan, membagikan, dan meretensi data selama proses riset, perancangan, pengembangan, hingga pemeliharaan sistem.",
        importantNotice: {
            title: "Prinsip Data Produksi",
            content: "Kami secara tegas menghindari penggunaan data riil pengguna akhir dalam server pengembangan maupun staging. Penerapan data tiruan (mock data) teranonymisasi wajib dijalankan dalam pipeline rekayasa kami.",
        },
        sections: [
            {
                number: "01",
                title: "Kebutuhan Berbasis Tujuan",
                content: "Kami hanya meminta dan memproses data yang memiliki tujuan jelas dan relevan langsung dengan perencanaan, pengerjaan, dan pemeliharaan produk yang disepakati.",
            },
            {
                number: "02",
                title: "Prinsip Hak Akses Terkecil",
                content: "Akses terhadap materi dan data proyek dibatasi secara ketat hanya kepada anggota tim atau spesialis yang memerlukannya untuk menyelesaikan tugas spesifik mereka (Least Privilege Principle).",
            },
            {
                number: "03",
                title: "Pengelolaan Kredensial Klien",
                content: "Untuk akses server, repositori, atau API, kami mendorong penggunaan akun khusus, otorisasi berbasis peran (RBAC), akses temporer, dan saluran brankas kata sandi (vault) terenkripsi daripada melalui pesan obrolan biasa.",
                callout: "Rekomendasi Keamanan: Hindari mengirim API key, kata sandi root server, atau kredensial database melalui chat teks biasa. Gunakan encrypted password manager atau secret manager.",
            },
            {
                number: "04",
                title: "Penyimpanan dan Repositori",
                content: "Aset dan data proyek disimpan dalam repositori kode terenkripsi dan sistem manajemen proyek resmi yang terlindungi 2FA. Kami meminimalisasi duplikasi file sensitif di perangkat pribadi anggota tim.",
            },
            {
                number: "05",
                title: "Layanan & Platform Pihak Ketiga",
                content: "Jika proyek memanfaatkan layanan komputasi awan, CDN, atau API eksternal, akses dikonfigurasi secara terbatas sesuai kebutuhan fungsional dan tunduk pada perjanjian kepatuhan yang relevan.",
            },
            {
                number: "06",
                title: "Informasi Rahasia (NDA)",
                content: "Setiap informasi yang diklasifikasikan sebagai data rahasia atau hak milik intelektual klien dilindungi dengan komitmen kerahasiaan penuh dan tidak akan pernah dibagikan tanpa persetujuan tertulis.",
            },
            {
                number: "07",
                title: "Isolasi Lingkungan Pengembangan",
                content: "Lingkungan development, staging, dan preview dipisahkan secara menyeluruh dari database produksi aktual untuk mencegah risiko kebocoran data pengguna nyata selama proses debugging.",
                callout: "Isolasi Lingkungan: Server staging dan development tidak pernah terhubung langsung ke basis data produksi aktif milik klien.",
            },
            {
                number: "08",
                title: "Salinan Cadangan (Backup)",
                content: "Salinan kode sumber dan data cadangan dibuat semata-mata demi kontinuitas pengerjaan, pemulihan bencana (disaster recovery), dan kepatuhan kontrak, dengan enkripsi data saat istirahat (at-rest).",
            },
            {
                number: "09",
                title: "Pasca-Penyelesaian Proyek",
                content: "Setelah fase serah terima atau kontrak selesai, hak akses kredensial akan dialihkan kembali sepenuhnya kepada klien, dan salinan lokal yang tidak lagi diperlukan akan dibersihkan sesuai kesepakatan.",
            },
            {
                number: "10",
                title: "Protokol Respons Insiden",
                content: "Apabila terjadi potensi insiden keamanan atau anomali akses pada data proyek, kami akan segera mengisolasi ancaman, mendokumentasikan temuan teknis, dan memberi tahu pihak klien secara transparan.",
            },
            {
                number: "11",
                title: "Tanggung Jawab Kolaboratif Klien",
                content: "Keamanan siber merupakan komitmen bersama. Kami menyarankan klien untuk mengaktifkan MFA pada akun utama mereka, memperbarui kontak perwakilan sah, dan mencabut akses kami setelah pekerjaan rampung.",
            },
            {
                number: "12",
                title: "Pertanyaan & Verifikasi",
                content: "Pihak klien yang membutuhkan verifikasi tata kelola keamanan atau audit kepatuhan dapat menghubungi tim teknis kami di hello@zorscraft.id.",
            },
        ],
    },
};

export default function DataHandlingContent() {
    const { lang } = useLang();
    const t = dataHandlingData[lang];

    return (
        <LegalLayout
            title={t.title}
            subtitle={t.subtitle}
            lastUpdated={t.lastUpdated}
            accentColor="#2D8065"
            opening={t.opening}
            importantNotice={t.importantNotice}
            sections={t.sections}
        />
    );
}
