import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import "./Projects.css";

function Projects() {
    return (
        <div id="projects" className="section projects-layout">
            <div className="projects-left">
                <h1 className="section-title projects-title">Projects</h1>
                <p className="projects-subtitle">A minimalist gallery of code and design experiments.</p>
            </div>
            <div className="projects-list">
                <ProjectCard
                    category="Compilers & Interpreters"
                    title="Monkey programming language interpreter"
                    description="A Java 8 implementation of the Monkey programming language, inspired by the book 'Writing an Interpreter in Go', incorporates fundamental features including variable binding, arithmetic expressions, built-in functions, closures, and more."
                    anchors={[
                        { link: "https://github.com/roguib/monkey", text: "Source code on Github" },
                    ]}
                    delay={0}
                />
                <ProjectCard
                    category="Developer Tooling"
                    title="Automatic Angular snippets generator for VSCode"
                    description="A small Javascript library that parses any Angular codebase and generates custom snippets for VS Code editor. I programmed this library when I was working with Angular, as I felt I was constantly looking over the component's properties."
                    anchors={[
                        { link: "https://github.com/roguib/ng-vs-snippets", text: "Source code on Github" },
                        { link: "https://www.npmjs.com/package/@roguib/ng-vs-snippets", text: "NPM package" }
                    ]}
                    delay={0.1}
                />
            </div>
        </div>
    );
}

export default Projects;
