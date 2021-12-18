import { FaTimes } from 'react-icons/fa'


const Project = ({ project, onDelete, onToggle }) => {
    return (
        <div className={`project ${project.reminder ? 'reminder' : ''}`} 
        onDoubleClick={() => 
        onToggle(project.id)}>
                <h3>{project.projectTitle} <FaTimes style={{ color: 'red',
                 cursor: 'pointer'}} 
                 onClick={() => onDelete(project.id)}/></h3>    
                <p>{project.text}</p> 
                {/* <p>{project.reminder}</p>  */}
        </div>
    )
}

export default Project
