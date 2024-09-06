import { useRef } from 'react';
import "./ThemeButton.css";

function ThemeButton() {
    const themeButtonRef = useRef(null);

    const handleThemeSwitch = () => {
        if (!!!themeButtonRef.current.className ||
            themeButtonRef.current.className.indexOf('backwards') === 0) {
            themeButtonRef.current.className = 'forward';
        } else {
            themeButtonRef.current.className = 'backwards';
        }
    };

    return (
        <div class="theme-button-wrapper">
            <button ref={themeButtonRef} onClick={handleThemeSwitch}></button>
        </div>
    )
}

export default ThemeButton;