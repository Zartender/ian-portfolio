import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div>
             <a href="tel:6142829107" target="_blank"><h2>Phone</h2></a>
            <a href="mailto:imgreenblott@gmail.com" target="_blank"><h2>Email</h2></a>
            <a href="https://github.com/Zartender" target="_blank"><h2>GitHub</h2></a>
            <a href="https://www.linkedin.com/in/greenblott/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B4bEZG6ECQfuDOqLPKRLZkA%3D%3D" target="_blank"><h2>Linkedin</h2></a>
            <Link to='/projects'>Back</Link>
        </div>
    )
}
 export default Contact