import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { Link } from "react-router-dom"




const Header = ({ title, onAdd, showAdd }) => {
   
        const location = useLocation()



    return (
        <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        {location.pathname === '/' && (
        <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
        />
        )}
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'Ian Greenblott',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'white', backgroundColor: 'red'
}

export default Header

