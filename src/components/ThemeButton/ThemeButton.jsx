import { useState, useLayoutEffect } from 'react';
import ThemeUtils from "../../utils/ThemeUtils";
// TODO: convert them to svg for faster loading
import moonImg from "../../images/moon.png";
import sunImg from "../../images/sun.png";
import "./ThemeButton.css";

function ThemeButton() {
    // Lazy initializer runs synchronously on the first render — safe because
    // ThemeButton only ever mounts on the client (Header returns null until
    // hydrated). This means the correct classes are baked into the very first
    // paint, eliminating the flash/slide seen when refs were mutated after mount.
    const [currentTheme, setCurrentTheme] = useState(() =>
        ThemeUtils.prefersDarkTheme()
            ? ThemeUtils.THEME_OPTIONS.DARK
            : ThemeUtils.THEME_OPTIONS.LIGHT
    );

    // isInitial gates whether to use the static initial-position/background
    // classes (no animation) or the animated post-click classes.
    const [isInitial, setIsInitial] = useState(true);

    // One-time effect: persist the resolved theme and apply CSS custom
    // properties. Runs after the first render but before the browser paints,
    // so there is no visible flash even for the side-effect work.
    useLayoutEffect(() => {
        ThemeUtils.updateThemePreferences(currentTheme);
        ThemeUtils.changeTheme(currentTheme);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleThemeSwitch = () => {
        const { DARK, LIGHT } = ThemeUtils.THEME_OPTIONS;
        const newTheme = currentTheme === DARK ? LIGHT : DARK;
        setCurrentTheme(newTheme);
        setIsInitial(false);
        ThemeUtils.updateThemePreferences(newTheme);
        ThemeUtils.changeTheme(newTheme);
    };

    // Derive button className from state:
    //   initial dark  → '' (natural left: 0, no animation)
    //   initial light → 'theme-button-wrapper-initial-pos-light' (static right)
    //   post-click    → 'dark' | 'light' (triggers CSS keyframe animations)
    const buttonClassName = isInitial
        ? (currentTheme === ThemeUtils.THEME_OPTIONS.DARK ? '' : 'theme-button-wrapper-initial-pos-light')
        : currentTheme;

    // Derive icons wrapper className from state:
    //   initial → static background color class (no animation)
    //   post-click → animated background transition class
    const iconsWrapperClassName = isInitial
        ? `theme-icons-wrapper initial-${currentTheme}-background`
        : `theme-icons-wrapper ${currentTheme}-background`;

    return (
        <div className="theme-button-wrapper">
            <button className={buttonClassName} onClick={handleThemeSwitch}></button>
            <div className={iconsWrapperClassName} onClick={handleThemeSwitch}>
                <img src={sunImg.src} />
                <img src={moonImg.src} />
            </div>
        </div>
    );
}

export default ThemeButton;
