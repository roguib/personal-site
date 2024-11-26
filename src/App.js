import "./App.css";
import Editor from "./components/editor";
import JobHistory from './components/JobHistory/JobHistory';
import PersonalDescription from './components/PersonalDescription/PersonalDescription';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="web-content">
      <Header />
      <div className="xl-flex">
        <div className="col section">
          <Profile />
          <PersonalDescription />
        </div>
        <div className="col section">
          <Editor />
        </div>
      </div>
      <JobHistory />
      <Projects />
    </div>
  );
}

export default App;
