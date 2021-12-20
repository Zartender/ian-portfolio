import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'

import { Link } from "react-router-dom"




const Header = ({ title }) => {
   
        // const location = useLocation()



    return (
        <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        
        
        <Link style={linkStyle} onClick={linkStyleClick} to='/about'>About</Link>
        <Link style={linkStyle} onClick={linkStyleClick} to='/portfolio'>Portfolio</Link>
        <Link style={linkStyle} onClick={linkStyleClick} to='/contact'>Contact</Link>
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
    color: 'white', 
    backgroundColor: 'pink',
    justifyContent: 'center',
}

const linkStyle = {
    color: 'black',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
}

const linkStyleClick = (onClick, style) => {
    style=
    {color: 'pink',
    fontFamily: 'Helvetica',
    textDecoration: 'none',}

}

export default Header

