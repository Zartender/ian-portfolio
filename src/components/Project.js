import { FaTimes } from 'react-icons/fa'


const Project = ({ project, onDelete, onToggle }) => {
    return (
        <div className="project" onDoubleClick={() => 
        onToggle(project.id)}>
                <h3>{project.heading} <FaTimes style={{ color: 'red',
                 cursor: 'pointer'}} 
                 onClick={() => onDelete(project.id)}/></h3>    
                <p>{project.biography}</p>        
        </div>
    )
}

export default Project
