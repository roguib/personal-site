import "./ProjectCard.css";

function ProjectCard({ title, description, anchors, image }) {
    return (
        <div className="card">
            <div style={{ display: 'flex', 'justify-content': 'center' }}>
                <img className="card-image" src={image} />
            </div>
            <h3>{title}</h3>
            <div className="card-body">
                <p align="justify">{description}</p>
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