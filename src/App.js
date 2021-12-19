
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import AddProject from "./components/AddProject"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"

// import './App.css';

const App = () => {
  const [showAddProject, setShowAddProject] = useState
    (false)

  const [projects, setProjects] = useState([])

  // Effect
  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      setProjects(projectsFromServer)
    }
    getProjects()
  }, [])

  //  fetch prjects
  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5000/projects')
    const data = await res.json()

    return data

  }

  const fetchProject = async (id) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`)
    const data = await res.json()

    return data

  }




  // Add Projct
  const addProject = async (project) => {
    const res = await fetch(`http://localhost:5000/projects`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })

    const data = await res.json()
    setProjects([...projects, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newProject = { id, ...project }
    // setProjects([...projects, newProject])
  }


  // Delete Project
  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE'
    })


    setProjects(projects.filter((project) => project.id !==
      id))
  }

  // Toggle Reiminder
  const toggleReminder = async (id) => {
    const projectToToggle = await fetchProject(id)
    const updProject = {
      ...projectToToggle,
      reminder: !projectToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updProject)
    })
    const data = await res.json()

    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, reminder: data.reminder } : project
      )
    )
  }

  return (
    <Router>

      <div className='container'>
        <Header
          onAdd={() => setShowAddProject
            (!showAddProject)}
          showAdd={showAddProject}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddProject && <AddProject onAdd={addProject} />}
                {projects.length > 0 ? (
                  <Projects
                    projects={projects}
                    onDelete={deleteProject}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Projects to Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
