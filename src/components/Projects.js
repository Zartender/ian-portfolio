const Projects = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <h3 key={project.id}>{project.heading}</h3>
            ))}
        </>
    )
}

export default Projects
