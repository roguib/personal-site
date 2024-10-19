import './Header.css';
import { useEffect, useState } from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';
import ViewportUtils from '../../utils/ViewportUtils';

const HEADER_DATA = [{
    label: 'About',
    id: 'about'
}, {
    label: 'Career',
    id: 'job-history'
}, {
    label: 'Projects',
    id: 'projects'
}, {
    label: 'Blog'
}];

function Header() {
    const [itemSelected, setItemSelected] = useState(0);

    useEffect(() => {
        document.addEventListener('scrollend', () => {
            HEADER_DATA.forEach((item, index) => {
                if (item?.id) {
                    const element = document.getElementById(item?.id);
                    if (ViewportUtils.isElementInViewport(element)) {
                        setItemSelected(() => index);
                    }
                }
            });
        })
    }, []);

    const handleItemSelection = (e, itemIndex) => {
        e.preventDefault();
        e.stopPropagation();
        setItemSelected(itemIndex);
        document
            .getElementById(HEADER_DATA[itemIndex].id)
            .scrollIntoView({ 
                behavior: 'smooth' 
            });
    }
    
    return (
        <div id="header" class="header-wrapper">
            {HEADER_DATA.map(({ label }, index) => (
                <a
                    className={`${itemSelected === index ? 'item-selected' : ''}`}
                    onClick={(e) => handleItemSelection(e, index)}
                    onKeyDown={(e) => handleItemSelection(e, index)}>
                    {label}
                </a>
            ))}
            <ThemeButton />
        </div>
    );
}

export default Header;