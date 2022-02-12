import "./projectCard.css";
import React from "react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }

  render() {
    return (
      <div className="card">
        <h3>This is the title of the card</h3>
        <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className="card-image" src="./assets/github.svg" alt="Github link logo" />
        </div>
      </div>
    );
  }
}
export default ProjectCard;
