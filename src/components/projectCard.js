import "./projectCard.css";
import React from "react";

class ProjectCard extends React.Component {
  constructor({ title, description, anchors, image}) {
    super({ title, description, anchors, image });
    this.title = title;
    this.description = description;
    this.anchors = anchors || [];
    console.log(this.anchors);
    this.image = image;
  }

  render() {
    return (
      <div className="card">
        <h3>{this.title}</h3>
        <div className="card-body">
            <p className="card-text" align="justify">{this.description}</p>
            <img className="card-image" src={this.image} alt="Project logo" />
        </div>
        <div>
            {this.anchors.map(anchor => <a href={anchor.link} className="footer-anchor">{anchor.text}</a>)}
        </div>
      </div>
    );
  }
}
export default ProjectCard;
