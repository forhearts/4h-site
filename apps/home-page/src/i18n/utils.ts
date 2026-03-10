export const languages = {
    "zh-CN": "简体中文",
    "en": "English",
};

export const defaultLang = "zh-CN";

export const i18n = {
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
    if (lang in i18n) return lang as keyof typeof i18n;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof i18n) {
    return function t(key: keyof (typeof i18n)[typeof defaultLang]) {
        return i18n[lang][key] || i18n[defaultLang][key];
    };
}

export function getLocalizedPath(lang: keyof typeof i18n, subdomain: string = "", path: string = "/") {
    const prefix = lang === defaultLang ? "" : `/${lang}`;
    const subdomainPrefix = subdomain === "" ? "" : `${subdomain}.`;
    return `${subdomainPrefix}${prefix}${path.startsWith("/") ? path : "/" + path}`;
}
