import Project from './Project'


const Projects = ({ projects }) => {
    return (
        <>
            {projects.map(() => (
                <Project 
                />
            ))}
        </>
    )
}

export default Projects
