"use client";

import { useState, useEffect } from "react";
import {
    MessageSquare,
    Search,
    Trash2,
    Send
} from "lucide-react";

interface ContactMessage {
    id: string;
    sender: string;
    email: string;
    subject: string;
    message: string;
    date: string;
    status: "unread" | "read" | "replied";
}

const INITIAL_MESSAGES: ContactMessage[] = [
    {
        id: "msg_1",
        sender: "Naufal Pratama",
        email: "naufal@startupindonesia.id",
        subject: "Kolaborasi Event Webinar Tech Architecture",
        message: "Halo tim ZORS CRAFT, kami tertarik mengundang speaker dari ZORS untuk webinar mengenai modern Next.js architecture bulan depan.",
        date: "2026-10-15T09:30:00Z",
        status: "unread",
    },
    {
        id: "msg_2",
        sender: "Clarissa Dewi",
        email: "clarissa@designhub.co",
        subject: "Pertanyaan mengenai Design System Retainer",
        message: "Apakah ZORS CRAFT menerima audit dan perbaikan Design System yang sudah ada sebelumnya di Figma kami? Berapa estimasi timeline-nya?",
        date: "2026-10-14T14:15:00Z",
        status: "read",
    },
    {
        id: "msg_3",
        sender: "David Tan",
        email: "david@tanlogistics.com",
        subject: "Konsultasi Redesign Landing Page",
        message: "Selamat siang, kami butuh bantuan redesign website logistik kami agar lebih modern dan cepat diakses klien internasional.",
        date: "2026-10-12T11:00:00Z",
        status: "replied",
    },
];

const STORAGE_KEY = "zors_admin_messages";

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [filter, setFilter] = useState<"all" | "unread" | "read" | "replied">("all");
    const [search, setSearch] = useState("");
    const [selectedMsg, setSelectedMsg] = useState<ContactMessage | null>(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                setMessages(JSON.parse(raw));
            } else {
                setMessages(INITIAL_MESSAGES);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MESSAGES));
            }
        } catch {
            setMessages(INITIAL_MESSAGES);
        }
    }, []);

    const updateMessages = (newMsgs: ContactMessage[]) => {
        setMessages(newMsgs);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newMsgs));
        } catch (e) {
            console.error("Failed to save messages", e);
        }
    };

    const toggleStatus = (id: string, newStatus: ContactMessage["status"]) => {
        const updated = messages.map((m) => (m.id === id ? { ...m, status: newStatus } : m));
        updateMessages(updated);
        if (selectedMsg && selectedMsg.id === id) {
            setSelectedMsg({ ...selectedMsg, status: newStatus });
        }
    };

    const handleDelete = (id: string) => {
        if (!confirm("Hapus pesan ini?")) return;
        const updated = messages.filter((m) => m.id !== id);
        updateMessages(updated);
        if (selectedMsg?.id === id) setSelectedMsg(null);
    };

    const filtered = messages.filter((m) => {
        const matchesSearch =
            m.sender.toLowerCase().includes(search.toLowerCase()) ||
            m.subject.toLowerCase().includes(search.toLowerCase()) ||
            m.message.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || m.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171715]">
                    Pesan Masuk & Inquiry
                </h1>
                <p className="text-sm text-[#5C5850] mt-1">
                    Kelola pesan umum dan pertanyaan calon klien dari formulir kontak website.
                </p>
            </div>

            {/* Filter and Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#5C5850]" />
                    <input
                        type="text"
                        placeholder="Cari pengirim atau subjek pesan..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171715]/10 text-xs text-[#171715] focus:outline-none focus:border-[#A88C40]"
                    />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                    {(["all", "unread", "read", "replied"] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono capitalize transition-colors cursor-pointer ${
                                filter === status
                                    ? "bg-[#171715] text-[#F0ECE2] font-semibold"
                                    : "bg-white border border-[#171715]/10 text-[#5C5850] hover:text-[#171715]"
                            }`}
                        >
                            {status === "all" ? "Semua" : status === "unread" ? "Belum Dibaca" : status === "read" ? "Dibaca" : "Dibalas"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Messages Content Split View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* List Column */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-[#171715]/10 overflow-hidden shadow-xs divide-y divide-[#171715]/5">
                    {filtered.length === 0 ? (
                        <div className="py-12 text-center text-xs font-mono text-[#5C5850]">
                            Tidak ada pesan yang sesuai.
                        </div>
                    ) : (
                        filtered.map((msg) => (
                            <div
                                key={msg.id}
                                onClick={() => {
                                    setSelectedMsg(msg);
                                    if (msg.status === "unread") toggleStatus(msg.id, "read");
                                }}
                                className={`p-4 transition-colors cursor-pointer ${
                                    selectedMsg?.id === msg.id
                                        ? "bg-[#A88C40]/10 border-l-4 border-l-[#A88C40]"
                                        : msg.status === "unread"
                                        ? "bg-amber-50/40"
                                        : "hover:bg-[#171715]/[0.02]"
                                }`}
                            >
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <h4 className={`text-xs ${msg.status === "unread" ? "font-bold text-[#171715]" : "font-semibold text-[#171715]/80"}`}>
                                        {msg.sender}
                                    </h4>
                                    <span className="text-[10px] font-mono text-[#5C5850]">
                                        {new Date(msg.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                                    </span>
                                </div>
                                <p className="text-xs font-medium text-[#171715] truncate mb-1">
                                    {msg.subject}
                                </p>
                                <p className="text-[11px] text-[#5C5850] line-clamp-2">
                                    {msg.message}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* Detail View Column */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-[#171715]/10 p-6 shadow-xs flex flex-col justify-between min-h-[350px]">
                    {selectedMsg ? (
                        <div className="space-y-6">
                            <div className="flex items-start justify-between border-b border-[#171715]/10 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-[#171715]">
                                        {selectedMsg.subject}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1 text-xs text-[#5C5850]">
                                        <span>Dari: <strong>{selectedMsg.sender}</strong> ({selectedMsg.email})</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <select
                                        value={selectedMsg.status}
                                        onChange={(e) => toggleStatus(selectedMsg.id, e.target.value as ContactMessage["status"])}
                                        className="text-xs font-mono rounded-lg border border-[#171715]/10 px-2.5 py-1 bg-[#FAF9F5]"
                                    >
                                        <option value="unread">Belum Dibaca</option>
                                        <option value="read">Dibaca</option>
                                        <option value="replied">Dibalas</option>
                                    </select>
                                    <button
                                        onClick={() => handleDelete(selectedMsg.id)}
                                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                                        title="Hapus"
                                    >
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#171715]/5 text-xs text-[#171715] leading-relaxed whitespace-pre-wrap">
                                {selectedMsg.message}
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-[#171715]/10">
                                <a
                                    href={`mailto:${selectedMsg.email}?subject=Re: ${encodeURIComponent(selectedMsg.subject)}`}
                                    onClick={() => toggleStatus(selectedMsg.id, "replied")}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171715] hover:bg-[#A88C40] text-white text-xs font-medium transition-colors"
                                >
                                    <Send className="size-3.5" />
                                    <span>Balas via Email ({selectedMsg.email})</span>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center py-16 text-center text-[#5C5850]">
                            <MessageSquare className="size-10 text-[#171715]/20 mb-2" />
                            <p className="text-sm font-medium text-[#171715]">Pilih salah satu pesan untuk membaca</p>
                            <p className="text-xs">Klik daftar pesan di sebelah kiri untuk melihat isi lengkap.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
