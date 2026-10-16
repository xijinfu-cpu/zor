"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "id";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
