import './App.css'
// import { useState } from 'react';
import PropTypes from 'prop-types';


function App() {
  return <div className="fullApp">
    <Header appName="Currency Web App" />
  </div>;
}

const Header = (props) => {
  Header.propTypes = {
    appName: PropTypes.string.isRequired // appName should be a required string
  };

  return (
    <div className='header'>
      <h1>{props.appName}</h1>
    </div>
  );
};

export default App