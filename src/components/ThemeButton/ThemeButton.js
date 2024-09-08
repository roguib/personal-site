import { useEffect, useRef } from 'react';
import ThemeUtils from "../../utils/ThemeUtils";
import "./ThemeButton.css";

function ThemeButton() {
    const themeButtonRef = useRef(null);
    
    useEffect(() => {
        if (!ThemeUtils.prefersDarkTheme()) {
            themeButtonRef.current.className = ThemeUtils.THEME_OPTIONS.DARK;
        }
    });

    const handleThemeSwitch = () => {
        const themeOptions = ThemeUtils.THEME_OPTIONS;
        if (!!!themeButtonRef.current.className ||
            themeButtonRef.current.className.indexOf(themeOptions.DARK) === 0) {
            themeButtonRef.current.className = themeOptions.LIGHT;
        } else {
            themeButtonRef.current.className = themeOptions.DARK;
        }
    };

    return (
        <div class="theme-button-wrapper">
            <button ref={themeButtonRef} onClick={handleThemeSwitch}></button>
        </div>
    )
}

export default ThemeButton;