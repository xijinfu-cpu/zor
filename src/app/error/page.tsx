"use client";

import { useState } from "react";
import Link from "next/link";
import {
    AlertTriangle,
    Search,
    X,
    Copy,
    Check,
    Home,
    Sparkles
} from "lucide-react";
import { useLang } from "@/lib/language-context";

interface StatusCodeInfo {
    code: number;
    category: "1xx" | "2xx" | "3xx" | "4xx" | "5xx";
    name: string;
    headline: { id: string; en: string };
    desc: { id: string; en: string };
    cause: { id: string; en: string };
    solution: { id: string; en: string };
    severity: "info" | "success" | "warning" | "error" | "critical";
}

const STATUS_CODES: StatusCodeInfo[] = [
    // 1xx Informational
    {
        code: 100,
        category: "1xx",
        name: "Continue",
        headline: { id: "Permintaan Diterima, Lanjutkan", en: "Request Received, Continue" },
        desc: {
            id: "Server telah menerima bagian awal permintaan dan klien harus melanjutkan pengiriman sisa permintaan.",
            en: "The server has received the initial part of the request and client should continue sending remainder.",
        },
        cause: {
            id: "Digunakan saat mengirim payload besar dengan header 'Expect: 100-continue'.",
            en: "Triggered during large payload uploads when client checks if server accepts the payload.",
        },
        solution: {
            id: "Klien dapat melanjutkan mengirim request body.",
            en: "Client can proceed to stream the rest of the request body.",
        },
        severity: "info",
    },
    {
        code: 101,
        category: "1xx",
        name: "Switching Protocols",
        headline: { id: "Peralihan Protokol", en: "Switching Protocols" },
        desc: {
            id: "Server menyetujui permintaan klien untuk beralih protokol komunikasi (misalnya dari HTTP ke WebSocket).",
            en: "Server agrees to switch communication protocol based on client request (e.g., HTTP to WebSocket).",
        },
        cause: {
            id: "Header 'Upgrade: websocket' dikirim saat handshake real-time.",
            en: "Sent when initiating real-time connection such as WebSockets.",
        },
        solution: {
            id: "Koneksi beralih ke saluran bi-directional.",
            en: "Connection upgrades to the requested bidirectional channel.",
        },
        severity: "info",
    },
    {
        code: 102,
        category: "1xx",
        name: "Processing",
        headline: { id: "Sedang Diproses (WebDAV)", en: "Processing Request" },
        desc: {
            id: "Server telah menerima permintaan penuh namun membutuhkan waktu lebih lama untuk memprosesnya.",
            en: "The server has received the full request but needs time to complete complex processing.",
        },
        cause: {
            id: "Operasi batch atau pengolahan data besar.",
            en: "Batch operations or long-running database tasks.",
        },
        solution: {
            id: "Klien menunggu respon final tanpa melakukan timeout prematur.",
            en: "Client should wait for the final response without triggering a timeout.",
        },
        severity: "info",
    },
    {
        code: 103,
        category: "1xx",
        name: "Early Hints",
        headline: { id: "Petunjuk Awal Preload", en: "Early Hints" },
        desc: {
            id: "Digunakan untuk mengembalikan header Link sebelum respon final agar browser dapat mem-preload resource penting.",
            en: "Returns Link headers before final response so browser can preload critical assets.",
        },
        cause: {
            id: "Optimasi web performance (preloading CSS / JavaScript).",
            en: "Performance optimization for critical CSS / JS assets.",
        },
        solution: {
            id: "Browser mulai mengunduh file statis sebelum halaman HTML selesai dibuat.",
            en: "Browser preloads stylesheets and scripts early.",
        },
        severity: "info",
    },

    // 2xx Success
    {
        code: 200,
        category: "2xx",
        name: "OK",
        headline: { id: "Permintaan Berhasil", en: "Request Successful" },
        desc: {
            id: "Permintaan HTTP berhasil diproses dan data yang diminta berhasil dikembalikan.",
            en: "The request has succeeded and the requested payload is delivered.",
        },
        cause: {
            id: "Endpoint API atau halaman web valid dan merespon secara normal.",
            en: "Valid endpoint or page accessed normally.",
        },
        solution: {
            id: "Tidak ada tindakan yang diperlukan; status normal.",
            en: "No action required; standard successful response.",
        },
        severity: "success",
    },
    {
        code: 201,
        category: "2xx",
        name: "Created",
        headline: { id: "Resource Berhasil Dibuat", en: "Resource Created" },
        desc: {
            id: "Permintaan berhasil dan resource baru berhasil dibuat di database server.",
            en: "The request has been fulfilled and resulted in a new resource created.",
        },
        cause: {
            id: "Permintaan POST berhasil (misal: submit form brief baru).",
            en: "Successful POST request (e.g. submitting a new project brief).",
        },
        solution: {
            id: "Respon mengembalikan data atau ID resource baru.",
            en: "Response includes reference to the newly created entity.",
        },
        severity: "success",
    },
    {
        code: 204,
        category: "2xx",
        name: "No Content",
        headline: { id: "Berhasil Tanpa Konten", en: "No Content" },
        desc: {
            id: "Permintaan berhasil dieksekusi namun tidak ada data yang perlu dikembalikan ke klien.",
            en: "Server successfully fulfilled request with no body to return.",
        },
        cause: {
            id: "Sering digunakan pada operasi DELETE atau update sederhana.",
            en: "Commonly returned on successful DELETE operations or silent saves.",
        },
        solution: {
            id: "Klien memperbarui UI lokal tanpa perlu parsing JSON baru.",
            en: "Client updates local state directly.",
        },
        severity: "success",
    },

    // 3xx Redirection
    {
        code: 301,
        category: "3xx",
        name: "Moved Permanently",
        headline: { id: "Dialihkan Permanen", en: "Moved Permanently" },
        desc: {
            id: "URL target telah dipindahkan secara permanen ke alamat URL baru.",
            en: "The requested URI has been assigned a new permanent URI.",
        },
        cause: {
            id: "Migrasi domain, restrukturisasi rute web, atau pengalihan HTTP ke HTTPS.",
            en: "Domain migration, URL restructure, or forced HTTPS redirect.",
        },
        solution: {
            id: "Browser dan mesin pencari (SEO) akan otomatis memperbarui bookmark dan indeks ke URL baru.",
            en: "Clients and SEO crawlers automatically update their references.",
        },
        severity: "warning",
    },
    {
        code: 302,
        category: "3xx",
        name: "Found (Temporary Redirect)",
        headline: { id: "Dialihkan Sementara", en: "Found / Temporary Redirect" },
        desc: {
            id: "Resource untuk sementara waktu berada di URL yang berbeda.",
            en: "The target resource resides temporarily under a different URI.",
        },
        cause: {
            id: "A/B testing, alur login sementara, atau halaman maintenance berkala.",
            en: "Temporary maintenance, A/B testing, or auth gateway redirect.",
        },
        solution: {
            id: "Klien mengikuti URL baru tanpa mengubah bookmark lama.",
            en: "Client follows redirect while preserving original URL for future calls.",
        },
        severity: "warning",
    },
    {
        code: 304,
        category: "3xx",
        name: "Not Modified",
        headline: { id: "Tidak Berubah (Gunakan Cache)", en: "Not Modified" },
        desc: {
            id: "Konten tidak mengalami perubahan sejak kunjungan terakhir. Browser menggunakan cache lokal.",
            en: "Resource has not been modified since timestamp specified in conditional headers.",
        },
        cause: {
            id: "Browser mengirimkan header 'If-Modified-Since' atau 'ETag'.",
            en: "Browser conditional request using cached ETag.",
        },
        solution: {
            id: "Menghemat bandwidth karena browser langsung membaca file dari disk.",
            en: "Saves bandwidth by loading assets from client cache.",
        },
        severity: "warning",
    },
    {
        code: 307,
        category: "3xx",
        name: "Temporary Redirect",
        headline: { id: "Pengalihan Sementara (Metode Sama)", en: "Temporary Redirect" },
        desc: {
            id: "Mengalihkan permintaan sementara dengan jaminan metode HTTP (POST/GET) tidak akan diubah.",
            en: "Temporary redirect with strict guarantee that HTTP method will not change.",
        },
        cause: {
            id: "Pengalihan pengiriman form POST ke gateway proses.",
            en: "Redirecting sensitive POST form submissions safely.",
        },
        solution: {
            id: "Klien mengulang request dengan method yang sama ke URL baru.",
            en: "Client re-issues request to new URI with the same method.",
        },
        severity: "warning",
    },
    {
        code: 308,
        category: "3xx",
        name: "Permanent Redirect",
        headline: { id: "Pengalihan Permanen (Metode Sama)", en: "Permanent Redirect" },
        desc: {
            id: "Pengalihan permanen modern yang menjaga metode request asli agar tidak berubah menjadi GET.",
            en: "Modern permanent redirect preventing method mutation from POST to GET.",
        },
        cause: {
            id: "Perpindahan endpoint API permanen.",
            en: "Permanent API endpoint relocations.",
        },
        solution: {
            id: "Perbarui URL dasar konfigurasi API pada aplikasi klien.",
            en: "Update base API endpoints in client configurations.",
        },
        severity: "warning",
    },

    // 4xx Client Errors
    {
        code: 400,
        category: "4xx",
        name: "Bad Request",
        headline: { id: "Format Permintaan Tidak Valid", en: "Bad Request" },
        desc: {
            id: "Server tidak dapat memproses permintaan karena kesalahan sintaks atau payload tidak valid dari klien.",
            en: "The server cannot process the request due to invalid client syntax or malformed payload.",
        },
        cause: {
            id: "Format JSON rusak, parameter URL salah, atau validasi field form gagal.",
            en: "Malformed JSON, missing required fields, or invalid query parameters.",
        },
        solution: {
            id: "Periksa kembali data formulir dan tipe data JSON yang dikirimkan.",
            en: "Validate payload schema and verify request headers.",
        },
        severity: "error",
    },
    {
        code: 401,
        category: "4xx",
        name: "Unauthorized",
        headline: { id: "Perlu Autentikasi Login", en: "Unauthorized Access" },
        desc: {
            id: "Akses ditolak karena Anda belum masuk (login) atau token autentikasi tidak valid / kedaluwarsa.",
            en: "Authentication is required and has failed or has not yet been provided.",
        },
        cause: {
            id: "Membuka halaman admin tanpa sesi aktif atau token JWT habis.",
            en: "Visiting protected admin routes without valid credentials or session.",
        },
        solution: {
            id: "Masuk melalui halaman /admin/login dengan kredensial yang sah.",
            en: "Log in via /admin/login with authorized credentials.",
        },
        severity: "error",
    },
    {
        code: 402,
        category: "4xx",
        name: "Payment Required",
        headline: { id: "Pembayaran Diperlukan", en: "Payment Required" },
        desc: {
            id: "Kode reservasi untuk sistem pembayaran digital atau langganan layanan berbayar.",
            en: "Reserved for digital payment systems or subscription-gated features.",
        },
        cause: {
            id: "Akun langganan kedaluwarsa atau kuota berbayar habis.",
            en: "Subscription expired or billing limit reached.",
        },
        solution: {
            id: "Selesaikan tagihan atau perbarui metode pembayaran.",
            en: "Settle outstanding invoices or update payment method.",
        },
        severity: "error",
    },
    {
        code: 403,
        category: "4xx",
        name: "Forbidden",
        headline: { id: "Akses Terlarang / Dibatasi", en: "Forbidden Access" },
        desc: {
            id: "Server mengenali identitas Anda, namun Anda tidak memiliki hak izin (permission) untuk mengakses data ini.",
            en: "The server understands the request but refuses to authorize access.",
        },
        cause: {
            id: "Hak akses role pengguna tidak mencukupi (contoh: non-admin mencoba ubah data sensitif).",
            en: "Insufficient user permissions or IP blocklist restrictions.",
        },
        solution: {
            id: "Hubungi Super Administrator ZORS CRAFT untuk menaikkan level otorisasi Anda.",
            en: "Contact system administrator for elevated privileges.",
        },
        severity: "error",
    },
    {
        code: 404,
        category: "4xx",
        name: "Not Found",
        headline: { id: "Halaman Tidak Ditemukan", en: "Page Not Found" },
        desc: {
            id: "Server tidak dapat menemukan resource atau alamat halaman URL yang Anda cari.",
            en: "The server cannot find the requested resource or URL route.",
        },
        cause: {
            id: "Salah ketik URL, halaman telah dihapus, atau link tautan sudah usang.",
            en: "Typo in URL, deleted case study, or outdated external link.",
        },
        solution: {
            id: "Periksa ejaan URL atau kembali ke halaman beranda melalui menu navigasi.",
            en: "Check URL spelling or return to homepage via navigation.",
        },
        severity: "error",
    },
    {
        code: 405,
        category: "4xx",
        name: "Method Not Allowed",
        headline: { id: "Metode HTTP Tidak Diizinkan", en: "Method Not Allowed" },
        desc: {
            id: "Metode permintaan (seperti POST, PUT, atau DELETE) tidak diizinkan untuk endpoint URL ini.",
            en: "The request method is recognized but not supported by target resource.",
        },
        cause: {
            id: "Mengirim POST ke file HTML statis atau GET ke endpoint yang hanya menerima POST.",
            en: "Sending POST to a static route or GET to a submission-only API.",
        },
        solution: {
            id: "Gunakan metode HTTP yang sesuai (cek dokumentasi API).",
            en: "Switch to allowed HTTP methods specified in Allow header.",
        },
        severity: "error",
    },
    {
        code: 408,
        category: "4xx",
        name: "Request Timeout",
        headline: { id: "Waktu Permintaan Habis", en: "Request Timeout" },
        desc: {
            id: "Koneksi terputus karena server menunggu terlalu lama untuk menerima permintaan dari klien.",
            en: "The server timed out waiting for the client to send its request.",
        },
        cause: {
            id: "Koneksi internet klien lambat atau terputus saat mengunggah file.",
            en: "Slow client internet connection or network latency during upload.",
        },
        solution: {
            id: "Periksa koneksi internet Anda dan coba kirim ulang permintaan.",
            en: "Verify network stability and retry the request.",
        },
        severity: "error",
    },
    {
        code: 409,
        category: "4xx",
        name: "Conflict",
        headline: { id: "Konflik Data Resource", en: "State Conflict" },
        desc: {
            id: "Permintaan tidak dapat diselesaikan karena terjadi konflik dengan status resource saat ini.",
            en: "Request could not be processed because of conflict in current resource state.",
        },
        cause: {
            id: "Mengunggah data dengan slug/email yang sudah terdaftar sebelumnya.",
            en: "Duplicate slug or concurrent edit conflict.",
        },
        solution: {
            id: "Muat ulang data terbaru atau gunakan identifier unik yang berbeda.",
            en: "Resolve merge conflict and retry with updated version token.",
        },
        severity: "error",
    },
    {
        code: 429,
        category: "4xx",
        name: "Too Many Requests",
        headline: { id: "Batas Frekuensi Terlampaui (Rate Limit)", en: "Too Many Requests" },
        desc: {
            id: "Pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu (Rate Limit Protection).",
            en: "The user has sent too many requests in a given amount of time.",
        },
        cause: {
            id: "Spam tombol submit, crawling bot agresif, atau pengujian API berulang kali.",
            en: "Rapid automated requests or brute force protection triggered.",
        },
        solution: {
            id: "Tunggu beberapa saat (lihat header Retry-After) sebelum mencoba lagi.",
            en: "Back off and wait for rate limit window to reset.",
        },
        severity: "error",
    },

    // 5xx Server Errors
    {
        code: 500,
        category: "5xx",
        name: "Internal Server Error",
        headline: { id: "Kesalahan Internal Server", en: "Internal Server Error" },
        desc: {
            id: "Server mengalami kondisi tak terduga yang mencegahnya menyelesaikan permintaan Anda.",
            en: "The server encountered an unexpected condition preventing it from fulfilling the request.",
        },
        cause: {
            id: "Bug pada kode backend, unhandled exception, atau kegagalan konfigurasi server.",
            en: "Unhandled runtime exception, database disconnect, or backend bug.",
        },
        solution: {
            id: "Periksa log konsol server dan laporkan ke tim teknis ZORS CRAFT.",
            en: "Check server diagnostic logs and report stack trace.",
        },
        severity: "critical",
    },
    {
        code: 501,
        category: "5xx",
        name: "Not Implemented",
        headline: { id: "Fitur Belum Diimplementasikan", en: "Not Implemented" },
        desc: {
            id: "Server belum mendukung atau belum mengimplementasikan fungsi yang dibutuhkan oleh permintaan.",
            en: "The server does not support the functionality required to fulfill the request.",
        },
        cause: {
            id: "Memanggil fitur API versi mendatang yang masih dalam tahap perancangan.",
            en: "Requesting future API version endpoints that are not yet built.",
        },
        solution: {
            id: "Gunakan versi API yang sudah stabil saat ini.",
            en: "Use currently released and supported API versions.",
        },
        severity: "critical",
    },
    {
        code: 502,
        category: "5xx",
        name: "Bad Gateway",
        headline: { id: "Gerbang Server Tidak Valid", en: "Bad Gateway" },
        desc: {
            id: "Server (seperti Nginx atau Cloudflare) menerima respons tidak valid dari server backend asal.",
            en: "The server, acting as a gateway or proxy, received an invalid response from upstream.",
        },
        cause: {
            id: "Aplikasi Node.js/Next.js mati mendadak atau reverse proxy salah konfigurasi port.",
            en: "Upstream application crashed or reverse proxy port mismatch.",
        },
        solution: {
            id: "Pastikan service aplikasi Node.js berjalan normal di server latar belakang.",
            en: "Ensure upstream Node.js process is active and healthy.",
        },
        severity: "critical",
    },
    {
        code: 503,
        category: "5xx",
        name: "Service Unavailable",
        headline: { id: "Layanan Sedang Tidak Tersedia", en: "Service Unavailable" },
        desc: {
            id: "Server untuk sementara tidak dapat menangani permintaan karena sedang maintenance atau kelebihan beban (overload).",
            en: "The server is currently unable to handle the request due to temporary overloading or maintenance.",
        },
        cause: {
            id: "Pemeliharaan server terencana atau lonjakan trafik pengunjung yang sangat tinggi.",
            en: "Scheduled maintenance or extreme traffic spike exceeding server capacity.",
        },
        solution: {
            id: "Coba lagi dalam beberapa menit. Tim kami secara aktif memantau ketersediaan sistem.",
            en: "Retry after a brief interval. Upstream servers will recover automatically.",
        },
        severity: "critical",
    },
    {
        code: 504,
        category: "5xx",
        name: "Gateway Timeout",
        headline: { id: "Waktu Gateway Habis", en: "Gateway Timeout" },
        desc: {
            id: "Proxy server tidak menerima respons tepat waktu dari server database atau server backend utama.",
            en: "The server, acting as a gateway, did not receive a timely response from upstream.",
        },
        cause: {
            id: "Query database kompleks yang terlalu lambat atau koneksi microservice bermasalah.",
            en: "Slow backend database query or unresponsive third-party API.",
        },
        solution: {
            id: "Optimalkan indeks database dan tingkatkan limit timeout pada gateway.",
            en: "Optimize database query execution and raise proxy timeout threshold.",
        },
        severity: "critical",
    },
    {
        code: 505,
        category: "5xx",
        name: "HTTP Version Not Supported",
        headline: { id: "Versi HTTP Tidak Didukung", en: "HTTP Version Not Supported" },
        desc: {
            id: "Server tidak mendukung versi protokol HTTP utama yang digunakan dalam permintaan klien.",
            en: "The server does not support the major HTTP protocol version used in request.",
        },
        cause: {
            id: "Klien menggunakan versi HTTP usang atau eksperimental yang tidak kompatibel.",
            en: "Outdated or experimental HTTP client protocol implementation.",
        },
        solution: {
            id: "Perbarui library HTTP klien ke protokol standar HTTP/1.1 atau HTTP/2.",
            en: "Upgrade HTTP client library to standard HTTP/1.1 or HTTP/2.",
        },
        severity: "critical",
    },
];

const SEVERITY_STYLES = {
    info: {
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        pill: "bg-sky-500",
        border: "hover:border-sky-400",
    },
    success: {
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        pill: "bg-emerald-500",
        border: "hover:border-emerald-400",
    },
    warning: {
        badge: "bg-amber-50 text-amber-800 border-amber-200",
        pill: "bg-amber-500",
        border: "hover:border-amber-400",
    },
    error: {
        badge: "bg-rose-50 text-rose-700 border-rose-200",
        pill: "bg-rose-500",
        border: "hover:border-rose-400",
    },
    critical: {
        badge: "bg-red-100 text-red-900 border-red-300 font-bold",
        pill: "bg-red-600",
        border: "hover:border-red-500",
    },
};

const UI_TEXT = {
    id: {
        badge: "Ensiklopedia Kode Status HTTP & Error (1xx–5xx)",
        title: "Katalog Kode Respon & Halaman Error",
        subtitle: "Panduan lengkap status protokol HTTP dari 1xx (Informasional), 2xx (Sukses), 3xx (Pengalihan), 4xx (Kesalahan Klien), hingga 5xx (Kesalahan Server) beserta diagnosis dan solusi teknis.",
        backHome: "Ke Beranda",
        searchPlaceholder: "Cari kode (mis. 404, 500, Timeout, Forbidden)...",
        tabs: [
            { key: "all", label: "Semua (1xx–5xx)" },
            { key: "1xx", label: "1xx Informasional" },
            { key: "2xx", label: "2xx Sukses" },
            { key: "3xx", label: "3xx Pengalihan" },
            { key: "4xx", label: "4xx Kesalahan Klien" },
            { key: "5xx", label: "5xx Kesalahan Server" },
        ],
        liveSim: "Simulasi Live",
        noMatch: "Tidak ada kode status yang cocok",
        noMatchDesc: "Coba cari dengan kata kunci lain seperti '404', '500', atau 'Gateway'.",
        simulatorTitle: "Simulasi Live & Tampilan Diagnostik Error",
        labelExplanation: "Penjelasan Respon:",
        labelCause: "Penyebab Umum (Root Cause):",
        labelSolution: "Solusi & Tindakan Perbaikan:",
        copyBtn: "Salin Status Code",
        copiedBtn: "Berhasil Disalin!",
        closeBtn: "Tutup Simulator",
    },
    en: {
        badge: "HTTP Status Codes & Error Encyclopedia (1xx–5xx)",
        title: "HTTP Status Codes & Error Catalog",
        subtitle: "A comprehensive reference for HTTP response codes from 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Errors), to 5xx (Server Errors) with root cause diagnosis and technical resolutions.",
        backHome: "Back to Home",
        searchPlaceholder: "Search code (e.g., 404, 500, Timeout, Forbidden)...",
        tabs: [
            { key: "all", label: "All (1xx–5xx)" },
            { key: "1xx", label: "1xx Informational" },
            { key: "2xx", label: "2xx Success" },
            { key: "3xx", label: "3xx Redirection" },
            { key: "4xx", label: "4xx Client Errors" },
            { key: "5xx", label: "5xx Server Errors" },
        ],
        liveSim: "Live Simulator",
        noMatch: "No status codes matched your query",
        noMatchDesc: "Try searching with different terms like '404', '500', or 'Gateway'.",
        simulatorTitle: "Live Error Simulator & Diagnostic View",
        labelExplanation: "Response Explanation:",
        labelCause: "Common Root Causes:",
        labelSolution: "Recommended Solution & Fixes:",
        copyBtn: "Copy Status Code",
        copiedBtn: "Copied to Clipboard!",
        closeBtn: "Close Simulator",
    },
};

export default function ErrorCatalogPage() {
    const { lang } = useLang();
    const t = UI_TEXT[lang];
    const [selectedCategory, setSelectedCategory] = useState<"all" | "1xx" | "2xx" | "3xx" | "4xx" | "5xx">("all");
    const [search, setSearch] = useState("");
    const [activeModalCode, setActiveModalCode] = useState<StatusCodeInfo | null>(null);
    const [copied, setCopied] = useState(false);

    const filtered = STATUS_CODES.filter((item) => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const query = search.toLowerCase();
        const matchesSearch =
            item.code.toString().includes(query) ||
            item.name.toLowerCase().includes(query) ||
            item.headline.id.toLowerCase().includes(query) ||
            item.headline.en.toLowerCase().includes(query) ||
            item.desc.id.toLowerCase().includes(query) ||
            item.desc.en.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    const handleCopy = (code: number, name: string) => {
        navigator.clipboard.writeText(`HTTP ${code} ${name}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#F0ECE2] text-[#171715] pt-32 pb-24 px-5 md:px-10">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Hero Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#171715]/10">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171715] text-[#F0ECE2] text-xs font-mono">
                            <Sparkles className="size-3 text-[#A88C40]" />
                            <span>{t.badge}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#171715]">
                            {t.title}
                        </h1>
                        <p className="text-sm md:text-base text-[#5C5850]">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#171715]/15 text-xs font-medium text-[#171715] hover:bg-[#171715] hover:text-[#F0ECE2] transition-colors"
                        >
                            <Home className="size-3.5" />
                            <span>{t.backHome}</span>
                        </Link>
                    </div>
                </div>

                {/* Filter Tabs & Search Bar */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    {/* Category tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                        {t.tabs.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key as "all" | "1xx" | "2xx" | "3xx" | "4xx" | "5xx")}
                                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
                                    selectedCategory === key
                                        ? "bg-[#171715] text-[#F0ECE2] shadow-sm font-semibold"
                                        : "bg-white border border-[#171715]/10 text-[#5C5850] hover:text-[#171715] hover:bg-white/80"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Search box */}
                    <div className="relative w-full lg:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#5C5850]" />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171715]/15 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40] transition-colors font-mono"
                        />
                    </div>
                </div>

                {/* Grid of Error Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((item) => {
                        const style = SEVERITY_STYLES[item.severity];

                        return (
                            <div
                                key={item.code}
                                onClick={() => setActiveModalCode(item)}
                                className={`bg-white rounded-2xl border border-[#171715]/10 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${style.border}`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold font-mono text-[#171715] group-hover:text-[#A88C40] transition-colors">
                                                {item.code}
                                            </span>
                                            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${style.badge}`}>
                                                {item.category}
                                            </span>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopy(item.code, item.name);
                                            }}
                                            className="p-1.5 rounded-lg text-[#171715]/30 hover:text-[#171715] hover:bg-[#171715]/5 transition-colors"
                                            title="Salin Status Code"
                                        >
                                            <Copy className="size-3.5" />
                                        </button>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-[#171715] group-hover:text-[#A88C40] transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-[#A88C40] font-mono mt-0.5">
                                            {lang === "en" ? item.headline.en : item.headline.id}
                                        </p>
                                    </div>

                                    <p className="text-xs text-[#5C5850] line-clamp-3 leading-relaxed">
                                        {lang === "en" ? item.desc.en : item.desc.id}
                                    </p>
                                </div>

                                <div className="mt-6 pt-3 border-t border-[#171715]/5 flex items-center justify-between text-xs font-mono">
                                    <span className="text-[#5C5850]">
                                        {item.severity.toUpperCase()}
                                    </span>
                                    <span className="text-[#A88C40] group-hover:translate-x-0.5 transition-transform font-semibold">
                                        {t.liveSim} &rarr;
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className="py-20 text-center space-y-3">
                        <AlertTriangle className="size-10 text-[#A88C40] mx-auto" />
                        <p className="text-base font-semibold text-[#171715]">{t.noMatch}</p>
                        <p className="text-xs text-[#5C5850]">{t.noMatchDesc}</p>
                    </div>
                )}
            </div>

            {/* Live Error Screen Simulator Modal */}
            {activeModalCode && (
                <div className="fixed inset-0 z-50 bg-[#171715]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-[#171715] border border-white/10 text-[#F0ECE2] rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative space-y-6">
                        {/* Close button */}
                        <button
                            onClick={() => setActiveModalCode(null)}
                            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="size-5" />
                        </button>

                        {/* Top Indicator */}
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-[#A88C40] animate-ping" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A88C40]">
                                {t.simulatorTitle}
                            </span>
                        </div>

                        {/* Big Error Number Display */}
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-5xl md:text-6xl font-bold font-mono tracking-tight text-white block">
                                    {activeModalCode.code}
                                </span>
                                <h2 className="text-lg font-bold text-white mt-1">
                                    {activeModalCode.name}
                                </h2>
                                <p className="text-xs text-[#A88C40] font-mono mt-0.5">
                                    {lang === "en" ? activeModalCode.headline.en : activeModalCode.headline.id}
                                </p>
                            </div>

                            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase self-start sm:self-center border ${SEVERITY_STYLES[activeModalCode.severity].badge}`}>
                                {activeModalCode.category} {activeModalCode.severity}
                            </span>
                        </div>

                        {/* Technical Details Tabs / Boxes */}
                        <div className="space-y-4 text-xs font-mono">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                                <span className="text-[10px] uppercase text-[#A88C40] tracking-wider block font-semibold">
                                    {t.labelExplanation}
                                </span>
                                <p className="text-white/80 leading-relaxed font-sans">
                                    {lang === "en" ? activeModalCode.desc.en : activeModalCode.desc.id}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                                <span className="text-[10px] uppercase text-amber-400 tracking-wider block font-semibold">
                                    {t.labelCause}
                                </span>
                                <p className="text-white/80 leading-relaxed font-sans">
                                    {lang === "en" ? activeModalCode.cause.en : activeModalCode.cause.id}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                                <span className="text-[10px] uppercase text-emerald-400 tracking-wider block font-semibold">
                                    {t.labelSolution}
                                </span>
                                <p className="text-emerald-100/90 leading-relaxed font-sans">
                                    {lang === "en" ? activeModalCode.solution.en : activeModalCode.solution.id}
                                </p>
                            </div>
                        </div>

                        {/* Modal Action Buttons */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
                            <button
                                onClick={() => handleCopy(activeModalCode.code, activeModalCode.name)}
                                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white/70 hover:text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
                            >
                                {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                                <span>{copied ? t.copiedBtn : t.copyBtn}</span>
                            </button>

                            <button
                                onClick={() => setActiveModalCode(null)}
                                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#A88C40] hover:bg-[#b89b4a] text-[#171715] text-xs font-semibold cursor-pointer transition-colors"
                            >
                                {t.closeBtn}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
