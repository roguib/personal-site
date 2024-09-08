import { useEffect, useRef } from 'react';
import ThemeUtils from "../../utils/ThemeUtils";
import "./ThemeButton.css";

function ThemeButton() {
    const themeButtonRef = useRef(null);
    
    useEffect(() => {
        const themeOptions = ThemeUtils.THEME_OPTIONS;
        if (!ThemeUtils.prefersDarkTheme()) {
            themeButtonRef.current.className = themeOptions.LIGHT;
            ThemeUtils.updateThemePreferences(themeOptions.LIGHT);
            return;
        }
        ThemeUtils.updateThemePreferences(themeOptions.DARK);
    });

    const handleThemeSwitch = () => {
        const themeOptions = ThemeUtils.THEME_OPTIONS;
        let themeChoice;
        if (!!!themeButtonRef.current.className ||
            themeButtonRef.current.className.indexOf(themeOptions.DARK) === 0) {
            themeChoice = themeOptions.LIGHT;
            themeButtonRef.current.className = themeChoice;
        } else {
            themeChoice = themeOptions.DARK;
            themeButtonRef.current.className = themeChoice;
        }
        ThemeUtils.updateThemePreferences(themeChoice);
    };

    return (
        <div class="theme-button-wrapper">
            <button ref={themeButtonRef} onClick={handleThemeSwitch}></button>
        </div>
    )
}

export default ThemeButton;