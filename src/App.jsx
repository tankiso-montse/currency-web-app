import './App.css'
import { useState } from 'react';
import PropTypes from 'prop-types';


function App() {
  return <div className="fullApp">
    <Header appName="Currency Web App" />
    <Buttons baseCurrency="USD" quoteCurrency1="ZAR" quoteCurrency2="EUR"/>
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

const Buttons = (props) => {
  const option1 = `${props.baseCurrency} / ${props.quoteCurrency1}`; // using backticks, JavaScript will interpret ${} as an expression to be evaluated and not a string
  const option2 = `${props.baseCurrency} / ${props.quoteCurrency2}`;
  const [selected, setSelected] = useState(option1)
   
  const handleClick = (option) => {
    setSelected(option);
  }

  Buttons.propTypes = {
    baseCurrency: PropTypes.string.isRequired,
    quoteCurrency1: PropTypes.string.isRequired,
    quoteCurrency2: PropTypes.string.isRequired
  }

  return (
    <div className='buttons'>
      <button
      style={{
          backgroundColor: selected === option1 ? 'navy' : 'grey',
          color: 'white',
          padding: '5px 10px',
          margin: '5px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(option1)}
      >
        {option1}
      </button>  
      <button
        style={{
          backgroundColor: selected === option2 ? 'navy' : 'grey',
          color: 'white',
          padding: '5px 10px',
          margin: '5px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(option2)}
      >
        {option2}
      </button>
    </div>
  );
}



export default App