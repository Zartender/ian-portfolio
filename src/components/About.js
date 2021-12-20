import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <p>I wrote this code to grasp a better understanding of the react framework. I reverse engineered a more complicated app for appending, creating, deleting, and editing projects and widdled the functionality down to this.<br></br> <br></br>My goal was to make somthing new-ish and <strong>not just simply copy & paste my HTML code from my HTML written portfolio.</strong><br></br> <br></br>I am learning.
            </p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}




 export default About