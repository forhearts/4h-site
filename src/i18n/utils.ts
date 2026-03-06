export const languages = {
    "zh-CN": "简体中文",
    "en": "English",
};

export const defaultLang = "zh-CN";

export const ui = {
    "zh-CN": {
        "nav.logo": "环心",
        "nav.project": "项目",
        "nav.works": "作品",
        "nav.about": "关于",
    },
    "en": {
        "nav.logo": "ForHearts",
        "nav.project": "Project",
        "nav.works": "Works",
        "nav.about": "About",
    },
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function getLocalizedPath(lang: keyof typeof ui, path: string = "/") {
    const prefix = lang === defaultLang ? "" : `/${lang}`;
    return `${prefix}${path.startsWith("/") ? path : "/" + path}`;
}
