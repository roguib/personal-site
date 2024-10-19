import ProjectCard from '../ProjectCard/ProjectCard';
import vsCodeSnippets from '../../images/ng-vs-snippets.png';
import monkeyPlayground from '../../images/monkey-playground.png';
import "./Projects.css";

const PROJECTS_DATA = [{
    title: 'Automatic Angular snippets generator for VSCode',
    description: "A small Javascript library that parses any Angular codebase and generates custom snippets for VS Code editor. I programmed this library when I was working with Angular, as I felt I was constantly looking over the component's properties. Generating custom snippets is a tedious task, as it involves maintaining a large JSON file that can be quickly outdated. This library parses every component definition and generates the required file that enables custom snippets on the project.",
}];

function Projects() {
    return (
        <div id="projects" className="section">
            <h1 className="title">Projects</h1>
            <p>Here are a collection of interesting projects I've worked on over the years. If you want to see all of them, consider visiting my Github page.</p>
            <br />
            <div className="xl-flex">
                <div className="col">
                    <ProjectCard
                        image={monkeyPlayground}
                        title="Monkey programming language interpreter"
                        description="A Java 8 implementation of the Monkey programming language, inspired by the book 'Writing an Interpreter in Go', incorporates fundamental features including variable binding, arithmetic expressions, built-in functions, closures, and more. Despite not being a Java expert, I find joy in experimenting with other languages that challenge my comfort zone. Additionally, I've crafted an interactive online playground that allows users to experiment the language directly within their web browsers."
                        anchors={[
                        { link: "https://github.com/roguib/monkey", text: "Source code on Github" },
                        { link: "https://www.roguib.com/projects/monkey/", text: "Online playground" }
                        ]}>
                    </ProjectCard>
                </div>
                <div className="col">
                    <ProjectCard
                        image={vsCodeSnippets}
                        title="Automatic Angular snippets generator for VSCode"
                        description="A small Javascript library that parses any Angular codebase and generates custom snippets for VS Code editor. I programmed this library when I was working with Angular, as I felt I was constantly looking over the component's properties. Generating custom snippets is a tedious task, as it involves maintaining a large JSON file that can be quickly outdated. This library parses every component definition and generates the required file that enables custom snippets on the project."
                        anchors={[
                        { link: "https://github.com/roguib/ng-vs-snippets", text: "Source code on Github" },
                        { link: "https://www.npmjs.com/package/@roguib/ng-vs-snippets", text: "NPM package" }
                        ]}>
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
}

export default Projects;