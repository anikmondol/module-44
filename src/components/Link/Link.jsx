import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div>
            <ul className="mr-10">
                <li ><a href={route.path}>{route.name}</a></li>
            </ul>
        </div>
    );
};

 Link.propTypes = {
    route: PropTypes.object.isRequired,
    
    // ... define your prop validations
  };


export default Link;