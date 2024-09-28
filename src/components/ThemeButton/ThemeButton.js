import { useEffect, useRef } from 'react';
import ThemeUtils from "../../utils/ThemeUtils";
// TODO: convert them to svg for faster loading
import moonImg from "../../images/moon.png";
import sunImg from "../../images/sun.png";
import "./ThemeButton.css";

function ThemeButton() {
    const themeButtonRef = useRef(null);
    const themeIconsWrapperRef = useRef(null);
    
    useEffect(() => {
        const themeOptions = ThemeUtils.THEME_OPTIONS;
        if (!ThemeUtils.prefersDarkTheme()) {
            // themeButtonRef.current.className = themeOptions.LIGHT;
            themeButtonRef.current.className += ` theme-button-wrapper-initial-pos-${themeOptions.LIGHT}`;
            themeIconsWrapperRef.current.className += ` initial-${themeOptions.LIGHT}-background`;
            ThemeUtils.updateThemePreferences(themeOptions.LIGHT);
            return;
        }
        ThemeUtils.updateThemePreferences(themeOptions.DARK);
        themeIconsWrapperRef.current.className += ` initial-${themeOptions.DARK}-background`;
    });

    const handleThemeSwitch = () => {
        const themeOptions = ThemeUtils.THEME_OPTIONS;
        let themeChoice;
        if (!!!themeButtonRef.current.className || ThemeUtils.hasClass(themeButtonRef, themeOptions.DARK)) {
            themeChoice = themeOptions.LIGHT;
            themeButtonRef.current.className = themeChoice;
            if (ThemeUtils.hasClass(themeIconsWrapperRef, `initial-${themeOptions.DARK}-background`)) {
                ThemeUtils
                    .replaceOrAppendClass(themeIconsWrapperRef, `initial-${themeOptions.DARK}-background`, `${themeOptions.LIGHT}-background`);
            } else {
                ThemeUtils
                    .replaceOrAppendClass(themeIconsWrapperRef, `${themeOptions.DARK}-background`, `${themeOptions.LIGHT}-background`);
            }
        } else {
            themeChoice = themeOptions.DARK;
            themeButtonRef.current.className = themeChoice;
            if (ThemeUtils.hasClass(themeIconsWrapperRef, `initial-${themeOptions.LIGHT}-background`)) {
                ThemeUtils
                    .replaceOrAppendClass(themeIconsWrapperRef, `initial-${themeOptions.LIGHT}-background`, `${themeOptions.DARK}-background`);
            } else {
                ThemeUtils
                    .replaceOrAppendClass(themeIconsWrapperRef, `${themeOptions.LIGHT}-background`, `${themeOptions.DARK}-background`);
            }
        }
        ThemeUtils.updateThemePreferences(themeChoice);
    };

    return (
        <div class="theme-button-wrapper">
            <button ref={themeButtonRef} onClick={handleThemeSwitch}></button>
            <div ref={themeIconsWrapperRef} class="theme-icons-wrapper">
                <img src={sunImg} />
                <img src={moonImg} />
            </div>
        </div>
    )
}

export default ThemeButton;