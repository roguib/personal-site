const THEME_KEY = "roguib.com.prefers.dark.theme";

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

    static get THEME_OPTIONS() {
        return THEME_OPTIONS;
    }
}

export default ThemeUtils;