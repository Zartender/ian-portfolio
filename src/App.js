import { useState } from "react"
import Header from "./components/Header";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";


// import './App.css';

function App() {
  const [showAddProject, setShowAddProject] = useState
    (false)

  const [projects, setProjects] = useState([
    {
      id: 1,
      projectTitle: 'Project 1',
      text: 'This is my experience',
      background: 'Background and Proifiencies',
      reminder: true,

    },
    {
      id: 2,
      projectTitle: 'Project 2',
      text: 'This is my experience',
      background: 'Background and Proifiencies',
      reminder: true,

    },
    {
      id: 3,
      projectTitle: 'Project 3',
      text: 'This is my experience',
      background: 'Background and Proifiencies',
      reminder: true,

    },

  ])

  // Add Projct
  const addProject = (project) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newProject = { id, ...project }
    setProjects([...projects, newProject])
  }


  // Delete Project
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !==
      id))
  }

  // Toggle Reiminder
  const toggleReminder = (id) => {
    setProjects(projects.map((project) => project.id === id ?
      { ...project, reminder: !project.reminder } : project)
    )
    console.log(id)
  }

  return (

    // jsx
    <div className='container'>
      <Header
        onAdd={() => setShowAddProject
          (!showAddProject)}
        showAdd={showAddProject}
      />
      {showAddProject && <AddProject onAdd={addProject} />}
      {projects.length > 0 ? (
        <Projects projects={projects} onDelete=
          {deleteProject} onToggle={toggleReminder} />
      ) : (
        'No Projects to Show'
      )}
    </div>
  )
}

export default App;
