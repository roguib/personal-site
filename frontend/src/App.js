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
            <img
              className="external-icon"
              src="./assets/github.svg"
              alt="Github link logo"
            />
            <img
              className="external-icon"
              src="./assets/twitter.svg"
              alt="Twitter link logo"
            />
            <img
              className="external-icon"
              src="./assets/ghost.ico"
              alt="Ghost link logo"
            />
            <img
              className="external-icon"
              src="./assets/linkedin.svg"
              alt="Linkedin link logo"
            />
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
