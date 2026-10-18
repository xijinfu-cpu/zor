"use client";

import LegalLayout, { LegalSection } from "@/components/custom/legal-layout";
import { useLang } from "@/lib/language-context";

interface TermsData {
    title: string;
    subtitle: string;
    lastUpdated: string;
    importantNotice: {
        title: string;
        content: string;
    };
    sections: LegalSection[];
}

const termsData: Record<"en" | "id", TermsData> = {
    en: {
        title: "Terms & Conditions",
        subtitle: "The rules for using ZORS CRAFT’s website and services.",
        lastUpdated: "4 October 2026",
        importantNotice: {
            title: "Important Notice",
            content: "Submitting a project brief or participating in discovery discussions does not constitute a binding contract until formal project terms and scope are confirmed in writing.",
        },
        sections: [
            {
                number: "01",
                title: "About These Terms",
                content: "These Terms & Conditions govern your use of the ZORS CRAFT website operated by Zors Craft (“ZORS CRAFT”, “we”, “our”, or “us”). By accessing or using this website, you agree to use it lawfully and in accordance with these terms.",
            },
            {
                number: "02",
                title: "Website Use",
                content: "You may use this website to learn about ZORS CRAFT, explore our work and services, and contact us regarding potential projects or partnerships. You must not misuse the website, interfere with its operation, attempt unauthorized access, or use its content for unlawful purposes.",
            },
            {
                number: "03",
                title: "Information on This Website",
                content: "We aim to keep the information on this website accurate and current. However, service descriptions, availability, portfolio information, pricing references, timelines, and other content may change without prior notice. Website content should not be interpreted as a binding proposal or guarantee unless expressly stated in a written agreement issued by ZORS CRAFT.",
            },
            {
                number: "04",
                title: "Project Engagements",
                content: "Contacting ZORS CRAFT, submitting a project brief, or participating in an initial discussion does not automatically create a contractual relationship. Projects begin only after the relevant scope, deliverables, timeline, commercial terms, and other conditions have been agreed in writing by the parties.",
            },
            {
                number: "05",
                title: "Intellectual Property",
                content: "Unless otherwise stated, the ZORS CRAFT name, identity, website design, copy, graphics, illustrations, and original website materials are owned by or licensed to Zors Craft. They may not be reproduced, republished, distributed, or commercially exploited without permission.",
            },
            {
                number: "06",
                title: "Client Work",
                content: "Intellectual property arrangements for client projects are governed by the applicable proposal, agreement, statement of work, or contract. Portfolio materials displayed on this website remain subject to any confidentiality or usage terms agreed with the relevant client.",
            },
            {
                number: "07",
                title: "Third-Party Services",
                content: "Our website may link to or integrate services operated by third parties. ZORS CRAFT is not responsible for the availability, content, security, or privacy practices of third-party services.",
            },
            {
                number: "08",
                title: "Limitation of Liability",
                content: "To the extent permitted by applicable law, ZORS CRAFT will not be responsible for indirect or consequential loss resulting solely from the use of, or inability to use, this website. Nothing in these terms excludes liability that cannot legally be excluded.",
            },
            {
                number: "09",
                title: "Privacy",
                content: "Personal information submitted through this website is handled in accordance with our Privacy Policy and applicable data protection requirements.",
            },
            {
                number: "10",
                title: "Changes to These Terms",
                content: "We may update these terms when our website, services, or legal obligations change. The latest version will be published on this page together with its revision date.",
            },
            {
                number: "11",
                title: "Governing Law",
                content: "These terms are governed by the laws of the Republic of Indonesia, unless another governing law is expressly agreed in a separate written contract.",
            },
            {
                number: "12",
                title: "Contact",
                content: "Questions about these terms may be sent to hello@zorscraft.id.",
            },
        ],
    },
    id: {
        title: "Syarat & Ketentuan",
        subtitle: "Ketentuan dan pedoman penggunaan website serta layanan ZORS CRAFT.",
        lastUpdated: "4 Oktober 2026",
        importantNotice: {
            title: "Pemberitahuan Penting",
            content: "Mengirimkan brief proyek atau berpartisipasi dalam diskusi awal tidak otomatis membentuk kontrak yang mengikat hingga rincian ruang lingkup, jadwal, dan kesepakatan formal dikonfirmasi secara tertulis.",
        },
        sections: [
            {
                number: "01",
                title: "Tentang Ketentuan Ini",
                content: "Syarat & Ketentuan ini mengatur penggunaan Anda atas situs web ZORS CRAFT yang dikelola oleh Zors Craft (“ZORS CRAFT”, “kami”). Dengan mengakses atau menggunakan website ini, Anda menyetujui untuk menggunakannya secara sah dan mematuhi ketentuan ini.",
            },
            {
                number: "02",
                title: "Penggunaan Website",
                content: "Anda dapat menggunakan website ini untuk mempelajari ZORS CRAFT, menjelajahi portofolio dan layanan kami, serta menghubungi kami terkait potensi kolaborasi proyek atau kemitraan. Anda dilarang menyalahgunakan website, mengganggu operasinya, mencoba akses ilegal, atau memanfaatkan konten untuk tujuan melanggar hukum.",
            },
            {
                number: "03",
                title: "Informasi di Website Ini",
                content: "Kami berupaya menjaga keakuratan informasi di situs web ini. Namun, deskripsi layanan, ketersediaan, informasi portofolio, referensi harga, estimasi waktu, dan konten lainnya dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Konten situs tidak dianggap sebagai penawaran resmi yang mengikat kecuali dinyatakan secara tertulis dalam perjanjian oleh ZORS CRAFT.",
            },
            {
                number: "04",
                title: "Kesepakatan Proyek",
                content: "Menghubungi ZORS CRAFT, mengisi brief proyek, atau mengikuti konsultasi awal tidak secara otomatis menciptakan hubungan kontraktual kerja. Proyek baru dimulai secara resmi setelah ruang lingkup kerja (scope), deliverables, timeline, dan syarat komersial disepakati secara tertulis oleh kedua belah pihak.",
            },
            {
                number: "05",
                title: "Hak Kekayaan Intelektual",
                content: "Kecuali dinyatakan lain, nama ZORS CRAFT, identitas visual, desain antarmuka, salinan teks, grafis, ilustrasi, dan materi asli website dimiliki oleh atau dilisensikan kepada Zors Craft. Seluruh elemen tersebut tidak boleh digandakan, didistribusikan ulang, atau dieksploitasi secara komersial tanpa izin tertulis.",
            },
            {
                number: "06",
                title: "Karya & Portofolio Klien",
                content: "Ketentuan kepemilikan hak kekayaan intelektual untuk proyek klien diatur dalam proposal, perjanjian kerja sama (statement of work), atau kontrak masing-masing. Materi portofolio yang ditampilkan di website ini tunduk pada kesepakatan kerahasiaan dan hak publikasi yang telah disepakati bersama klien.",
            },
            {
                number: "07",
                title: "Layanan Pihak Ketiga",
                content: "Website kami mungkin terhubung atau mengintegrasikan layanan dari pihak ketiga. ZORS CRAFT tidak bertanggung jawab atas ketersediaan, konten, keamanan, maupun praktik privasi dari platform atau penyedia layanan pihak ketiga tersebut.",
            },
            {
                number: "08",
                title: "Batasan Tanggung Jawab",
                content: "Sejauh diizinkan oleh hukum yang berlaku, ZORS CRAFT tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul semata-mata dari penggunaan atau ketidakmampuan menggunakan website ini.",
            },
            {
                number: "09",
                title: "Privasi",
                content: "Data pribadi yang dikirimkan melalui situs ini dikelola sesuai dengan Kebijakan Privasi kami dan peraturan perundang-undangan perlindungan data yang berlaku.",
            },
            {
                number: "10",
                title: "Perubahan Ketentuan",
                content: "Kami dapat memperbarui Syarat & Ketentuan ini sewaktu-waktu sesuai perkembangan operasional, layanan, atau kepatuhan regulasi hukum. Versi terbaru akan selalu dipublikasikan di halaman ini lengkap dengan tanggal pembaruan.",
            },
            {
                number: "11",
                title: "Hukum yang Mengatur",
                content: "Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia, kecuali disepakati lain dalam kontrak perjanjian terpisah secara tertulis.",
            },
            {
                number: "12",
                title: "Kontak",
                content: "Pertanyaan atau klarifikasi mengenai Syarat & Ketentuan ini dapat diajukan melalui email ke hello@zorscraft.id.",
            },
        ],
    },
};

export default function TermsContent() {
    const { lang } = useLang();
    const t = termsData[lang];

    return (
        <LegalLayout
            title={t.title}
            subtitle={t.subtitle}
            lastUpdated={t.lastUpdated}
            accentColor="#171715"
            importantNotice={t.importantNotice}
            sections={t.sections}
        />
    );
}
