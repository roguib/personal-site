import "./App.css";

function App() {
  return (
    <div className="flex-title-container">
      <div className="col">
        <div className="title">
          <h1>Hi,</h1>
          <h1>I'm Roger Guasch I Ibarra,</h1>
          <h1>A Software Engineer</h1>

          <div className="flex-external-icons-container">
            <a
              className="external-icon"
              href="https://github.com/roguib"
              target="_blank"
            >
              <img src="./assets/github.svg" alt="Github link logo" />
            </a>

            <a
              className="external-icon"
              href="https://twitter.com/rgrgib"
              target="_blank"
            >
              <img src="./assets/twitter.svg" alt="Twitter link logo" />
            </a>

            <a
              className="external-icon"
              href="https://ghost.org/"
              target="_blank"
            >
              <img src="./assets/ghost.ico" alt="Ghost link logo" />
            </a>

            <a
              className="external-icon"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img src="./assets/linkedin.svg" alt="Linkedin link logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="col title">
        <p>Lorem</p>
      </div>
    </div>
  );
}

export default App;
