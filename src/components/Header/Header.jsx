import './Header.css';
import { useEffect, useState } from 'react';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import ViewportUtils from '../../utils/ViewportUtils.js';

const HEADER_DATA = [{
    label: 'About',
    id: 'about'
}, 
{
    label: 'Career',
    id: 'job-history'
}, 
{
    label: 'Projects',
    id: 'projects'
}, 
// {
//     label: 'Blog'
// }
];

function Header() {
    const [itemSelected, setItemSelected] = useState(0);

    useEffect(() => {
        setItemSelected(ViewportUtils.getActiveSectionIndex(HEADER_DATA));

        const handleScrollEnd = () => setItemSelected(ViewportUtils.getActiveSectionIndex(HEADER_DATA));
        document.addEventListener('scrollend', handleScrollEnd);
        return () => document.removeEventListener('scrollend', handleScrollEnd);
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
        <div id="header" className="header-wrapper">
            {HEADER_DATA.map(({ label }, index) => (
                <a
                    key={index}
                    href="#"
                    className={`${itemSelected === index ? 'item-selected' : ''}`}
                    onClick={(e) => handleItemSelection(e, index)}
                    onKeyDown={(e) => handleItemSelection(e, index)}>
                    {label}
                </a>
            ))}
            <div className="header-divider" />
            <ThemeButton />
        </div>
    );
}

export default Header;