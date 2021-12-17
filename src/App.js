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


  return (

    // jsx
    <div className='container'>
     <Header title={'Ian Greenblott'}/>
     <Projects projects={projects}/>
    </div>
  )
}

export default App;
