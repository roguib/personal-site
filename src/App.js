import "./App.css";
import Editor from "./components/editor";
import ProjectCard from "./components/projectCard";

function App() {
  return (
    <div>
      <div className="flex-title-container">
        <div className="col">
          <div className="title">
            <h1>Hi,</h1>
            <h1>I'm Roger Guasch Ibarra,</h1>
            <h1>A Software Engineer</h1>

            <div className="flex-external-icons-container">
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
            </div>
          </div>
        </div>

        <div id="editor-wrapper" className="col">
          <Editor></Editor>
        </div>
      </div>
      <div className="empty-background">
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <p>Here are a collection of interesting projects I've worked over the years. To see all of them, consider visiting my Github page.</p>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}

export default App;
