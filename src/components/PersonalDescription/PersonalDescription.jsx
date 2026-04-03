import React from 'react';
import "./PersonalDescription.css";

function PersonalDescription() {
    return (
        <section id="about" className="section about-layout">
            <div className="about-left">
                <h1 className="section-title about-title">About</h1>
                <p className="about-subtitle">A bit about who I am and what I do.</p>
            </div>
            <div className="about-right reveal">
                <div id="personal-description-wrapper">
                    <p>In 2021 I moved from Barcelona to the beautiful city of Prague to start a Software Development Engineer position at Oracle. My current focus relies on developing features and fixing bugs in Visual Builder, a cloud-based platform designed for collaborative application development.</p>
                    <p>I dedicate most of my time working on the Javascript ecosystem, although recently I've been more focused on Preact components alongside Typescript.</p>
                    <p>I'm always keen into exploring new technologies and expand my knowledge. In 2023 I got certified as a Java SE 8 Programmer Oracle Certified Associate, mainly motivated by the fact that most of my team works in the backend.</p>
                </div>
            </div>
        </section>
    );
}

export default PersonalDescription;
