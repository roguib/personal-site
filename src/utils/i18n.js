import enGB from '../locales/i18n-EN_GB.json';

const LOCALES = {
    'en': enGB,
    'en-GB': enGB,
    'en-US': enGB,
};

function getLocale() {
    if (typeof navigator === 'undefined') return 'en-GB';
    const lang = navigator.language || (navigator.languages && navigator.languages[0]) || 'en-GB';
    if (LOCALES[lang]) return lang;
    const prefix = lang.split('-')[0];
    return Object.keys(LOCALES).find(k => k.startsWith(prefix)) || 'en-GB';
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

function i18n(key) {
    const locale = getLocale();
    const translations = LOCALES[locale] || enGB;
    const value = getNestedValue(translations, key) ?? getNestedValue(enGB, key);
    if (value === undefined) {
        throw new Error(`[i18n] Missing translation for key: "${key}"`);
    }
    return value;
}

export default i18n;
