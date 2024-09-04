import { useRef } from 'react';
import "./ThemeButton.css";

function ThemeButton() {
    const themeButtonRef = useRef(null);

    const handleThemeSwitch = () => {
        console.log(themeButtonRef.current.style.position);
    };

    return (
        <div class="theme-button-wrapper">
            <button className="pot" ref={themeButtonRef} onClick={handleThemeSwitch}></button>
        </div>
    )
}

export default ThemeButton;