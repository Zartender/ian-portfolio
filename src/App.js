import { useState } from "react"
import Header from "./components/Header";
import Projects from "./components/Projects";


// import './App.css';

function App() {

  const [projects, setProjects] = useState([
    {
        id: 1,
        heading: 'Project 1',
        biography: 'This is my experience',
        background: 'Background and Proifiencies',

    },
    {
        id: 2,
        heading: 'Project 2',
        biography: 'This is my experience',
        background: 'Background and Proifiencies',

    },
    {
        id: 3,
        heading: 'Project 3',
        biography: 'This is my experience',
        background: 'Background and Proifiencies',

    },

])

// Delete Project
const deleteProject = (id) => {
  setProjects(projects.filter((project) => project.id !== 
  id))
}

// Toggle Reiminder
const toggleReminder = (id) => {
  console.log(id)
}

  return (

    // jsx
    <div className='container'>
     <Header title={'Ian Greenblott'}/>
     {projects.length > 0 ?<Projects projects={projects} onDelete={deleteProject} onToggle={toggleReminder}/> : 'No Projects to Show'}
    </div>
  )
}

export default App;
