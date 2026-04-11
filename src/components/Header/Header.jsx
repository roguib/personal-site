import './Header.css';
import { useEffect, useRef, useState } from 'react';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import ViewportUtils from '../../utils/ViewportUtils.js';
import i18n from '../../utils/i18n.js';

const HEADER_DATA = [{
    label: i18n('navbar.sections.home'),
    id: 'home',
    iconKey: 'Home'
},
{
    label: i18n('navbar.sections.about'),
    id: 'about',
    iconKey: 'About'
},
{
    label: i18n('navbar.sections.career'),
    id: 'job-history',
    iconKey: 'Career'
},
{
    label: i18n('navbar.sections.projects'),
    id: 'projects',
    iconKey: 'Projects'
},
// {
//     label: i18n('navbar.sections.blog'),
//     id: 'blog',
//     iconKey: 'Blog'
// }
];

// Simple inline SVG icons for the drawer nav items.
// Using inline SVGs keeps the bundle self-contained with no extra asset requests.
const NAV_ICONS = {
    Home: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M2 7.5L9 2l7 5.5V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M6.5 17V11h5v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
    About: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    Career: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <rect x="1" y="6" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M1 10h16" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    ),
    Projects: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M2 5a1 1 0 0 1 1-1h4l2 2h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
};

function Header() {
    const [mounted, setMounted] = useState(false);
    const [itemSelected, setItemSelected] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerCloseRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Runs first on mount — client-only, after the stylesheet is applied.
    // Returning null before this point prevents the SSR'd HTML from painting
    // both navs simultaneously before CSS media queries have a chance to hide
    // the wrong one (FOUC fix).
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setItemSelected(ViewportUtils.getActiveSectionIndex(HEADER_DATA));

        const handleScrollEnd = () => setItemSelected(ViewportUtils.getActiveSectionIndex(HEADER_DATA));
        document.addEventListener('scrollend', handleScrollEnd);
        return () => document.removeEventListener('scrollend', handleScrollEnd);
    }, []);

    // Side effects while the drawer is open: lock body scroll + Escape key close.
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';

        if (drawerOpen) {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setDrawerOpen(false);
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }

        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    // Move focus into the drawer when it opens, and return it to the hamburger when it closes.
    // isInitialMount guards against running this on the very first render (drawerOpen = false),
    // which would call hamburgerRef.current?.focus() immediately and cause a repaint flicker.
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (drawerOpen) {
            requestAnimationFrame(() => drawerCloseRef.current?.focus());
        } else {
            hamburgerRef.current?.focus();
        }
    }, [drawerOpen]);

    const handleItemSelection = (e, itemIndex) => {
        e.preventDefault();
        e.stopPropagation();
        setItemSelected(itemIndex);
        const target = document.getElementById(HEADER_DATA[itemIndex].id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDrawerItemSelection = (e, itemIndex) => {
        handleItemSelection(e, itemIndex);
        setDrawerOpen(false);
    };

    if (!mounted) return null;

    return (
        <>
            {/* ── Desktop / tablet pill nav ─────────────────────────────────── */}
            <div id="header" className="header-wrapper" aria-label={i18n('navbar.ariaLabel')}>
                {HEADER_DATA.map(({ label }, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`${itemSelected === index ? 'item-selected' : ''}`}
                        onClick={(e) => handleItemSelection(e, index)}>
                        {label}
                    </a>
                ))}
                <div className="header-divider" />
                <ThemeButton />
            </div>

            {/* ── Mobile: hamburger trigger ─────────────────────────────────── */}
            {/*
                Positioned top-left on mobile; hidden on desktop via CSS.
                aria-expanded tells screen readers whether the drawer is open.
                aria-controls links the button to the drawer panel it controls.
            */}
            <button
                ref={hamburgerRef}
                className="nav-hamburger"
                aria-label={i18n('navbar.openMenu')}
                aria-expanded={drawerOpen ? 'true' : 'false'}
                aria-controls="mobile-drawer"
                onClick={() => setDrawerOpen(true)}
            >
                {/* Three-line hamburger rendered as SVG for crisp scaling at any DPI */}
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <rect y="0"  width="20" height="2" rx="1" fill="currentColor"/>
                    <rect y="7"  width="20" height="2" rx="1" fill="currentColor"/>
                    <rect y="14" width="20" height="2" rx="1" fill="currentColor"/>
                </svg>
            </button>

            {/* ── Mobile: backdrop ─────────────────────────────────────────── */}
            {/*
                Rendered at all times but opacity/pointer-events controlled by
                the .drawer-open class so CSS transitions can animate it.
                A separate aria-hidden div is fine here — it is purely decorative.
            */}
            <div
                className={`nav-backdrop${drawerOpen ? ' drawer-open' : ''}`}
                aria-hidden="true"
                onClick={() => setDrawerOpen(false)}
            />

            {/* ── Mobile: slide-in drawer panel ───────────────────────────── */}
            {/*
                role="dialog" + aria-modal="true" scopes the screen reader's
                virtual cursor to the drawer content while it is open.
                aria-label gives the dialog an accessible name.
            */}
            <nav
                id="mobile-drawer"
                className={`nav-drawer${drawerOpen ? ' drawer-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={i18n('navbar.menuAriaLabel')}
                aria-hidden={!drawerOpen}
                inert={!drawerOpen ? '' : undefined}
            >
                {/* Drawer header row: back arrow + "Menu" label + ThemeButton flush right */}
                <div className="drawer-header">
                    <button
                        ref={drawerCloseRef}
                        className="drawer-close"
                        aria-label={i18n('navbar.closeMenu')}
                        onClick={() => setDrawerOpen(false)}
                    >
                        {/* Left-pointing chevron — more universally recognisable than ← on mobile */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M13 16l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <span className="drawer-title">{i18n('navbar.menuTitle')}</span>
                    <ThemeButton />
                </div>

                {/* Nav items */}
                {HEADER_DATA.map(({ label, iconKey }, index) => (
                    <button
                        key={index}
                        className={`drawer-item${itemSelected === index ? ' item-selected' : ''}`}
                        onClick={(e) => handleDrawerItemSelection(e, index)}
                        aria-current={itemSelected === index ? 'location' : undefined}
                    >
                        <span className="drawer-item-icon">
                            {NAV_ICONS[iconKey]}
                        </span>
                        {label}
                    </button>
                ))}
            </nav>
        </>
    );
}

export default Header;
