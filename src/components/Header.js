import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    return (
        <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        <Button color='grey' text='About'/>
        <Button color='grey' text='Contacts'/>
        <Button color='grey' text='Projects'/>
        <Button color='grey' text='Resume'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Portfolio',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'white', backgroundColor: 'red'
}

export default Header

