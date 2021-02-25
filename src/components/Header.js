import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1 style={headingStyle}>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Member'}
            onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps= {
    title: 'Members List',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

const headingStyle = {
    color: 'white', 
    backgroundColor: 'gray', 
    textAlign: 'center',
}

export default Header;
