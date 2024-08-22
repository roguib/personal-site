import "./ProjectCard.css";

function ProjectCard({ title, description, anchors, image }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-body">
                <p className="card-text" align="justify">{description}</p>
            </div>
            <>
                {anchors.map(({ link, text }) => (
                <a
                    href={link}
                    className="footer-anchor"
                    target="_blank">
                    {text}
                </a>
                ))}
            </>
        </div>
    );
}

export default ProjectCard;