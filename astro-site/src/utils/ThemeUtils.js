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

    /**
     * Updates the CSS theme variables so they adapt to the user theme choice
     *
     * @param {THEME_OPTIONS} theme 
     */
    static changeTheme(theme) {
        switch(theme) {
            case THEME_OPTIONS.LIGHT:
                document.documentElement.style.setProperty("--primary", "var(--platinum)");
                document.documentElement.style.setProperty("--bg-primary", "var(--silver)");
                document.documentElement.style.setProperty("--secondary", "var(--silver)");
                document.documentElement.style.setProperty("--tertiary", "var(--eerie-black)");
            return;
            case THEME_OPTIONS.DARK:
                document.documentElement.style.setProperty("--primary", "var(--jet)");
                document.documentElement.style.setProperty("--bg-primary", "var(--eerie-black)");
                document.documentElement.style.setProperty("--secondary", "var(--eerie-black)");
                document.documentElement.style.setProperty("--tertiary", "var(--platinum)");
            return;
        }
    }

    /**
     * A utility method that checks if classA exists in ref element to replace it with classB,
     * if it doesn't exist it appends classB to the list of classes the ref has
     * 
     * @param {React.useRef} ref The reference to the element whose class is going to get updated
     * @param {*} classA The class that should be replaced, in case it exists
     * @param {*} classB The class that needs to be set
     */
    static replaceOrAppendClass(ref, classA, classB) {
        if (ref.current.className.indexOf(classA) >= 0) {
            ref.current.className = ref.current.className
                .replace(classA, classB);
        } else {
            ref.current.className += ` ${classB}`;
        }
    };

    /**
     * Returns true if ref contains classToSearch, false otherwise
     *
     * @param {React.useRef} ref 
     * @param {string} classToSearch 
     * @returns {boolean}
     */
    static hasClass(ref, classToSearch) {
        return ref
            .current
            .className
            .indexOf(classToSearch) >= 0;
    }

    static get THEME_OPTIONS() {
        return THEME_OPTIONS;
    }
}

export default ThemeUtils;