import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }




    return (
        <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        <Button color='grey' text='About' onClick={onClick}/>
        <Button color='grey' text='Contacts' onClick={onClick}/>
        <Button color='grey' text='Projects'onClick={onClick}/>
        <Button color='grey' text='Resume' onClick={onClick}/>
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

