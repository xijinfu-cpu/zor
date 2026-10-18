"use client";

import LegalLayout, { LegalSection } from "@/components/custom/legal-layout";
import { useLang } from "@/lib/language-context";

interface PrivacyData {
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

const privacyData: Record<"en" | "id", PrivacyData> = {
    en: {
        title: "Privacy Policy",
        subtitle: "How we collect, use, and protect personal information.",
        lastUpdated: "4 October 2026",
        opening: "ZORS CRAFT respects your privacy. This policy explains how Zors Craft may collect, use, store, disclose, and protect personal information when you visit our website, contact us, submit a project brief, or otherwise interact with us.",
        importantNotice: {
            title: "Statutory Compliance",
            content: "This policy is structured in compliance with Indonesia's Law No. 27 of 2022 on Personal Data Protection (UU PDP) and Government Regulation No. 71 of 2019 on Electronic Systems and Transactions.",
        },
        sections: [
            {
                number: "01",
                title: "Information We May Collect",
                content: "Depending on how you interact with ZORS CRAFT, we may receive information such as your name, email address, company or brand name, website, project requirements, messages, and other information you voluntarily provide. Our website may also generate basic technical information necessary for security, performance, and operation.",
            },
            {
                number: "02",
                title: "How We Use Information",
                content: "We use information when reasonably necessary to respond to inquiries, evaluate project requests, communicate with clients and prospective clients, provide agreed services, maintain our website, protect our systems, meet legal obligations, and improve our operations.",
            },
            {
                number: "03",
                title: "Legal Basis and Consent",
                content: "Where required, we process personal information on an appropriate legal basis and obtain consent when consent is required. Providing information through our contact or project brief forms means we may use that information to respond to the request for which it was submitted.",
            },
            {
                number: "04",
                title: "Information Sharing",
                content: "We do not sell personal information. Information may be shared with service providers or professional partners when reasonably necessary to operate our business or deliver an agreed service, subject to appropriate confidentiality and security expectations.",
            },
            {
                number: "05",
                title: "Data Retention",
                content: "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, contractual or business requirements, dispute resolution, security, and applicable legal obligations.",
            },
            {
                number: "06",
                title: "Data Security",
                content: "We apply reasonable organizational and technical measures intended to protect information against unauthorized access, misuse, alteration, disclosure, or loss. No digital system can guarantee absolute security, so we continually review how information is handled.",
            },
            {
                number: "07",
                title: "Your Rights",
                content: "Subject to applicable law, including Indonesia's UU No. 27 Tahun 2022 on Personal Data Protection (UU PDP), individuals have rights relating to their personal information, including rights to obtain clarity on processing, access or rectify information, withdraw consent, and request deletion or restriction of processing.",
                callout: "To exercise any of your data subject rights under UU PDP, contact our privacy desk directly at hello@zorscraft.id.",
            },
            {
                number: "08",
                title: "International Services",
                content: "Some technology providers used in operating our website or delivering projects may process information from infrastructure located outside Indonesia. Where applicable, we take reasonable steps to ensure such processing is handled in accordance with applicable requirements and contractual safeguards.",
            },
            {
                number: "09",
                title: "Third-Party Links",
                content: "This website may contain links to third-party websites or services. Their privacy practices are governed by their own policies, not this Privacy Policy.",
            },
            {
                number: "10",
                title: "Cookies & Analytics",
                content: "We do not currently use non-essential tracking cookies for advertising purposes. We may use limited technical cookies or similar technologies strictly for essential website functions, performance, and security.",
            },
            {
                number: "11",
                title: "Changes to This Policy",
                content: "We may update this Privacy Policy as our website, operations, technologies, or legal obligations change. The latest revision date will always appear at the top of this page.",
            },
            {
                number: "12",
                title: "Contact",
                content: "Privacy-related requests, questions, or data notices can be sent directly to hello@zorscraft.id.",
            },
        ],
    },
    id: {
        title: "Kebijakan Privasi",
        subtitle: "Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
        lastUpdated: "4 Oktober 2026",
        opening: "ZORS CRAFT menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana Zors Craft mengumpulkan, memproses, menyimpan, dan menjaga informasi pribadi saat Anda mengunjungi situs kami, menghubungi tim kami, mengisi brief proyek, atau menjalin hubungan kerja sama dengan kami.",
        importantNotice: {
            title: "Kepatuhan Hukum",
            content: "Kebijakan ini disusun berdasarkan kepatuhan penuh terhadap Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) dan Peraturan Pemerintah No. 71 Tahun 2019 tentang PSTE.",
        },
        sections: [
            {
                number: "01",
                title: "Data yang Kami Kumpulkan",
                content: "Bergantung pada interaksi Anda, kami dapat mengumpulkan data seperti nama lengkap, alamat email, nomor telepon, nama perusahaan atau merek, tautan situs web, kebutuhan proyek, dan pesan yang Anda berikan secara sukarela. Sistem web kami juga dapat merekam data teknis dasar yang diperlukan demi keamanan, performa, dan kestabilan sistem.",
            },
            {
                number: "02",
                title: "Tujuan Penggunaan Data",
                content: "Data digunakan untuk merespons pertanyaan Anda, mengevaluasi kebutuhan proyek, berkomunikasi secara profesional dengan klien, menjalankan layanan yang disepakati, menjaga integritas infrastruktur, memenuhi kewajiban perundang-undangan, serta meningkatkan kualitas operasional kami.",
            },
            {
                number: "03",
                title: "Dasar Hukum dan Persetujuan",
                content: "Kami memproses data pribadi berdasarkan dasar hukum yang sah dan persetujuan eksplisit Anda jika diwajibkan. Pengiriman data melalui formulir kontak atau brief proyek menjadi dasar persetujuan bagi kami untuk memproses informasi tersebut guna menindaklanjuti permintaan Anda.",
            },
            {
                number: "04",
                title: "Pembagian Informasi",
                content: "Kami tidak menjual data pribadi kepada pihak mana pun. Data hanya dibagikan kepada mitra teknologi terpercaya atau penyedia infrastruktur yang terikat perjanjian kerahasiaan ketat, semata-mata demi kelancaran penyampaian layanan atau operasional teknis yang sah.",
            },
            {
                number: "05",
                title: "Masa Retensi Data",
                content: "Kami hanya menyimpan informasi pribadi selama diperlukan untuk memenuhi tujuan pengumpulan, pemenuhan kontrak, penyelesaian sengketa, jaminan keamanan, atau kepatuhan terhadap regulasi perundang-undangan yang berlaku.",
            },
            {
                number: "06",
                title: "Keamanan Data",
                content: "Kami menerapkan standar keamanan teknis dan organisasi yang ketat untuk melindungi data dari akses tanpa izin, perusakan, pengubahan, atau kebocoran data. Tinjauan keamanan dilakukan secara berkala terhadap seluruh arsitektur sistem digital kami.",
            },
            {
                number: "07",
                title: "Hak-Hak Anda sebagai Subjek Data",
                content: "Sesuai dengan ketentuan UU PDP No. 27 Tahun 2022, Anda memiliki hak penuh untuk mendapatkan kejelasan pemrosesan, mengakses atau mengubah data Anda, menarik kembali persetujuan, serta meminta penghapusan atau pembatasan pemrosesan data pribadi Anda.",
                callout: "Untuk mengajukan hak subjek data atau permohonan terkait privasi berdasarkan UU PDP, hubungi meja privasi kami di hello@zorscraft.id.",
            },
            {
                number: "08",
                title: "Transfer & Layanan Internasional",
                content: "Layanan infrastruktur awan (cloud) atau alat kolaborasi kami mungkin memproses data melalui server luar negeri. Dalam kondisi ini, kami memastikan bahwa transfer data dilakukan dengan standar perlindungan yang setara dan aman.",
            },
            {
                number: "09",
                title: "Tautan Pihak Ketiga",
                content: "Website kami mungkin memuat tautan menuju situs atau aplikasi pihak ketiga. Kebijakan privasi mereka berada di luar tanggung jawab ZORS CRAFT, dan kami menyarankan Anda meninjau kebijakan privasi masing-masing platform.",
            },
            {
                number: "10",
                title: "Cookie & Analitik",
                content: "Kami tidak menerapkan cookie pelacak iklan pihak ketiga yang mengganggu. Cookie yang kami gunakan murni bersifat teknis untuk menjamin fungsi navigasi, performa pemuatan laman, dan keamanan sesi.",
            },
            {
                number: "11",
                title: "Pembaruan Kebijakan",
                content: "Kebijakan Privasi ini dapat diperbarui secara berkala menyesuaikan pembaruan hukum atau inovasi teknologi kami. Versi terbaru akan selalu ditampilkan di halaman ini beserta tanggal pembaruannya.",
            },
            {
                number: "12",
                title: "Kontak & Informasi",
                content: "Segala permohonan, tanggapan, atau pertanyaan mengenai perlindungan data pribadi dapat dikirimkan langsung ke email hello@zorscraft.id.",
            },
        ],
    },
};

export default function PrivacyContent() {
    const { lang } = useLang();
    const t = privacyData[lang];

    return (
        <LegalLayout
            title={t.title}
            subtitle={t.subtitle}
            lastUpdated={t.lastUpdated}
            accentColor="#586B6D"
            opening={t.opening}
            importantNotice={t.importantNotice}
            sections={t.sections}
        />
    );
}
