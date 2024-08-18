import './Header.css';
import { useState } from 'react';

const HEADER_DATA = [{
    label: 'About',
}, {
    label: 'Career',
}, {
    label: 'Projects',
}, {
    label: 'Blog'
}];

function Header() {
    const [itemSelected, setItemSelected] = useState(0);

    const handleItemSelection = (e, itemIndex) => {
        e.preventDefault();
        e.stopPropagation();
        setItemSelected(itemIndex);
    }
    
    return (
        <div class="header-wrapper">
            {HEADER_DATA.map(({ label }, index) => (
                <a
                    className={`${itemSelected === index ? 'item-selected' : ''}`}
                    onClick={(e) => handleItemSelection(e, index)}
                    onKeyDown={(e) => handleItemSelection(e, index)}>
                    {label}
                </a>
            ))}
        </div>
    );
}

export default Header;