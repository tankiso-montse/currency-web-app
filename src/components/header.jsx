import PropTypes from "prop-types";

const Header = (props) => {
  Header.propTypes = {
    appName: PropTypes.string.isRequired, // appName should be a required string
  };

  return (
    <div className="header">
      <h1>{props.appName}</h1>
    </div>
  );
};

export default Header;
