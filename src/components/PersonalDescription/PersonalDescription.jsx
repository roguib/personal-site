import React from 'react';
import "./PersonalDescription.css";
import i18n from '../../utils/i18n.js';

function PersonalDescription() {
    return (
        <section id="about" className="section about-layout">
            <div className="about-left">
                <h1 className="section-title about-title">{i18n('about.title')}</h1>
                <p className="about-subtitle">{i18n('about.subtitle')}</p>
            </div>
            <div className="about-right reveal">
                <div id="personal-description-wrapper">
                    <p>{i18n('about.p1')}</p>
                    <p>{i18n('about.p2')}</p>
                    <p>{i18n('about.p3')}</p>
                </div>
            </div>
        </section>
    );
}

export default PersonalDescription;
