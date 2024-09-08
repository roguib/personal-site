const THEME_KEY = "roguib.com.theme.preference";

const THEME_OPTIONS = {
    LIGHT: "light",
    DARK: "dark"
}

export class ThemeUtils {
    /**
     * If window object is defined, returns true if the user prefers dark theme.
     * False otherwise
     *
     * @returns {boolean}
     */
    static prefersDarkTheme() {
        if (window?.localStorage.getItem(THEME_KEY) === THEME_OPTIONS.DARK) {
            return true;
        } else if (window?.localStorage.getItem(THEME_KEY) === THEME_OPTIONS.LIGHT) {
            return false;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Updates the local storage flag to preserve the theme preference
     *
     * @param {'light' | 'dark'} preferedTheme 
     */
    static updateThemePreferences(preferedTheme) {
        localStorage.setItem(THEME_KEY, preferedTheme);
    }

    static get THEME_OPTIONS() {
        return THEME_OPTIONS;
    }
}

export default ThemeUtils;