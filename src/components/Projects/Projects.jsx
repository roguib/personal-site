import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import "./Projects.css";
import i18n from '../../utils/i18n.js';

function Projects() {
    return (
        <div id="projects" className="section projects-layout">
            <div className="projects-left">
                <h1 className="section-title projects-title">{i18n('projects.title')}</h1>
                <p className="projects-subtitle">{i18n('projects.subtitle')}</p>
            </div>
            <div className="projects-list">
                <ProjectCard
                    category={i18n('projects.items.monkey.category')}
                    title={i18n('projects.items.monkey.title')}
                    description={i18n('projects.items.monkey.description')}
                    anchors={[
                        { link: "https://github.com/roguib/monkey", text: i18n('projects.items.monkey.links.github') },
                    ]}
                    delay={0}
                />
                <ProjectCard
                    category={i18n('projects.items.ngVsSnippets.category')}
                    title={i18n('projects.items.ngVsSnippets.title')}
                    description={i18n('projects.items.ngVsSnippets.description')}
                    anchors={[
                        { link: "https://github.com/roguib/ng-vs-snippets", text: i18n('projects.items.ngVsSnippets.links.github') },
                        { link: "https://www.npmjs.com/package/@roguib/ng-vs-snippets", text: i18n('projects.items.ngVsSnippets.links.npm') }
                    ]}
                    delay={0.1}
                />
            </div>
        </div>
    );
}

export default Projects;
