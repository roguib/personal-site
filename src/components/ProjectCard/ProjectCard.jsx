import React from 'react';
import "./ProjectCard.css";

function ProjectCard({ category, title, description, anchors, delay = 0 }) {
    return (
        <div className="project-item reveal" style={{ transitionDelay: `${delay}s` }}>
            <span className="project-category">{category}</span>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
                {anchors.map(({ link, text }) => (
                    <a
                        key={text}
                        href={link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {text} <span className="project-link-arrow">→</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
