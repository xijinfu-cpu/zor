"use client";

import LegalLayout, { LegalSection } from "@/components/custom/legal-layout";
import { useLang } from "@/lib/language-context";

interface CookiePolicyData {
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

const cookiePolicyData: Record<"en" | "id", CookiePolicyData> = {
    en: {
        title: "Cookie Policy",
        subtitle: "Transparent standards for technical cookies and web storage.",
        lastUpdated: "4 October 2026",
        opening: "This Cookie Policy explains how Zors Craft (operating as ZORS CRAFT) uses cookies and related technologies to provide a fast, secure, and respectful browsing experience across our digital properties.",
        importantNotice: {
            title: "Privacy-First Architecture",
            content: "We do not deploy invasive marketing trackers or cross-site profiling cookies. Any data processed is strictly technical and handled under Indonesian UU PDP standards.",
        },
        sections: [
            {
                number: "01",
                title: "What Are Cookies",
                content: "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, provide security against automated abuse, and supply essential diagnostic information to website operators.",
            },
            {
                number: "02",
                title: "How ZORS CRAFT Uses Cookies",
                content: "At ZORS CRAFT, we believe in digital restraint. We only deploy cookies and local storage tokens when technically necessary to ensure page integrity, route optimization, font delivery, and brief form session persistence. We do not use intrusive tracking mechanisms.",
            },
            {
                number: "03",
                title: "Cookie Categories",
                content: "We classify our technical storage into distinct categories:\n\n• Strictly Necessary: Essential for core navigation, asset routing, and secure HTTPS protocol enforcement.\n• Functional & Performance: Helps us observe anonymous, aggregated page load speeds and ensure fluid delivery across global CDNs.\n• Zero Marketing Trackers: We do not deploy third-party advertising cookies, cross-site trackers, or behavioral profiling scripts.",
                callout: "ZORS CRAFT will never monetize your browsing data or participate in third-party ad-tracking exchanges.",
            },
            {
                number: "04",
                title: "Third-Party Services",
                content: "Our website is hosted on modern high-performance infrastructure and content delivery networks. These platforms may log anonymous network-level telemetry (such as IP addresses and browser agent headers) strictly to detect malicious traffic, DDoS attempts, and server errors.",
            },
            {
                number: "05",
                title: "Controlling & Disabling Cookies",
                content: "You can control, restrict, or delete cookies at any time through your browser settings. Most browsers (Chrome, Safari, Firefox, Edge) allow you to refuse cookies or remove existing tokens. Note that blocking essential cookies may affect the delivery of certain interactive features.",
            },
            {
                number: "06",
                title: "Regulatory Alignment & Inquiries",
                content: "This Cookie Policy complies with Indonesia's UU No. 27 Tahun 2022 (UU PDP) and relevant international privacy principles. For questions regarding our technical cookies or data practices, contact us at hello@zorscraft.id.",
            },
        ],
    },
    id: {
        title: "Kebijakan Cookie",
        subtitle: "Standar transparan dan etis penggunaan cookie teknis serta penyimpanan web.",
        lastUpdated: "4 Oktober 2026",
        opening: "Kebijakan Cookie ini menjelaskan bagaimana Zors Craft (beroperasi sebagai ZORS CRAFT) memanfaatkan teknologi cookie dan penyimpanan lokal demi memastikan performa website yang optimal, aman, dan tanpa pelacakan agresif.",
        importantNotice: {
            title: "Arsitektur Mengutamakan Privasi",
            content: "Kami menolak penggunaan pelacak iklan pihak ketiga atau pembuatan profil perilaku lintas-situs. Penyimpanan data teknis dijalankan murni demi integritas fungsi website dan patuh pada UU PDP Indonesia.",
        },
        sections: [
            {
                number: "01",
                title: "Apa Itu Cookie",
                content: "Cookie adalah berkas teks kecil yang disimpan pada peramban (browser) atau perangkat Anda saat menjelajahi sebuah situs web. Fungsinya meliputi pemeliharaan preferensi sesi, pencegahan serangan bot/DDoS, serta optimalisasi pemuatan konten.",
            },
            {
                number: "02",
                title: "Bagaimana ZORS CRAFT Menggunakan Cookie",
                content: "Kami menerapkan prinsip minimalisme digital. Cookie atau local storage hanya dipakai apabila secara teknis mutlak dibutuhkan untuk menjaga stabilitas sesi formulir brief, pemilihan preferensi bahasa, dan perutean CDN yang cepat. Kami tidak memata-matai aktivitas penjelajahan Anda.",
            },
            {
                number: "03",
                title: "Klasifikasi Cookie Kami",
                content: "Penyimpanan data peramban kami terbagi ke dalam kategori berikut:\n\n• Mutlak Diperlukan (Strictly Necessary): Diperlukan untuk perutean halaman aman HTTPS, integritas navigasi, dan keamanan CSRF.\n• Fungsional & Bahasa: Menyimpan preferensi antarmuka seperti pilihan bahasa (ID/EN) agar pengalaman kunjungan Anda konsisten.\n• Nol Pelacak Iklan (Zero Ad Trackers): Kami sama sekali tidak memasang cookie iklan bertarget, retargeting pixels, atau script pelacak pihak ketiga.",
                callout: "Komitmen Kami: ZORS CRAFT tidak pernah memperjualbelikan data lalu lintas pengguna atau bergabung dengan bursa data iklan daring pihak ketiga.",
            },
            {
                number: "04",
                title: "Infrastruktur Jaringan & CDN",
                content: "Website kami disajikan melalui jaringan CDN dan hosting modern. Infrastruktur ini dapat mencatat telemetri jaringan anonim (seperti header browser dan log IP singkat) semata-mata untuk memitigasi serangan siber atau kegagalan server.",
            },
            {
                number: "05",
                title: "Pengaturan & Penonaktifan Cookie",
                content: "Anda memiliki kendali penuh untuk menolak atau menghapus cookie melalui menu pengaturan pada peramban Anda (Chrome, Safari, Firefox, Edge). Harap dicatat bahwa memblokir cookie teknis esensial dapat memengaruhi responsivitas fitur web tertentu.",
            },
            {
                number: "06",
                title: "Kepatuhan Regulasi & Kontak",
                content: "Kebijakan Cookie ini selaras dengan Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Jika Anda memiliki pertanyaan seputar cookie teknis kami, hubungi kami di hello@zorscraft.id.",
            },
        ],
    },
};

export default function CookiePolicyContent() {
    const { lang } = useLang();
    const t = cookiePolicyData[lang];

    return (
        <LegalLayout
            title={t.title}
            subtitle={t.subtitle}
            lastUpdated={t.lastUpdated}
            accentColor="#A88C40"
            opening={t.opening}
            importantNotice={t.importantNotice}
            sections={t.sections}
        />
    );
}
