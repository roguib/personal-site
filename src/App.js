import "./App.css";
import Editor from "./components/editor";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import JobHistory from './components/JobHistory/JobHistory';
import PersonalDescription from './components/PersonalDescription/PersonalDescription';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Header />
      <div style={{display: 'flex'}}>
        <div className="col">
          <Profile />
          <PersonalDescription />
        </div>
        <div className="col">
          <Editor />
        </div>
      </div>
      <JobHistory />
      <div className="flex-title-container">
        <div className="col">
          <div className="title">
            
            {/* <div className="flex-external-icons-container">
              <a
                className="external-icon"
                href="https://github.com/roguib"
                target="_blank"
                alt="Link to my personal account in Github"
              >
                <img src="./assets/github.svg" alt="Github link logo" />
              </a>

              <a
                className="external-icon"
                href="https://ghost.org/"
                target="_blank"
                alt="Link to my personal blog"
                style={{ display: 'none' }}
              >
                <img src="./assets/ghost.ico" alt="Ghost link logo" />
              </a>

              <a
                className="external-icon"
                href="https://www.linkedin.com/in/roger-guasch-ibarra-823457230/"
                target="_blank"
                alt="Link to my Linkedin profile"
              >
                <img src="./assets/linkedin.svg" alt="Linkedin link logo" />
              </a>
            </div> */}
          </div>
        </div>

        <div id="editor-wrapper" className="col">
        </div>
      </div>
      <div className="empty-background">
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <p>Here are a collection of interesting projects I've worked on over the years. If you want to see all of them, consider visiting my Github page.</p>
        <br />
        <div className="project-cards">
          <ProjectCard
            title="Automatic Angular snippets generator for VSCode"
            description="A small Javascript library that parses any Angular codebase and generates custom snippets for VS Code editor. I programmed this library when I was working with Angular, as I felt I was constantly looking over the component's properties. Generating custom snippets is a tedious task, as it involves maintaining a large JSON file that can be quickly outdated. This library parses every component definition and generates the required file that enables custom snippets on the project."
            image="./assets/npm-2009.png"
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

export default App;
