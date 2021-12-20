import { Link } from "react-router-dom"

const Portfolio = () => {
    return (
        <div>
          
            <a href="https://github.com//Zartender/Weather-Dash" target="_blank"><h2>Weather Dashboard</h2></a>
            <a href="https://github.com/Zartender/Budget-Tracker" target="_blank"><h2>Budgeting App</h2></a>
            <a href="https://github.com/Zartender/Note-Writer" target="_blank"><h2>Note Writer</h2></a>
            <a href="https://github.com/Zartender/Greenblott-Portfolio" target="_blank"><h2>HTML Portoflio</h2></a>
            <a href="https://github.com/Zartender/21-MERN-Search-Engine" target="_blank"><h2>BookApi</h2></a>

            
            <Link to='/projects'>Back</Link>
        </div>
    )
}
export default Portfolio


