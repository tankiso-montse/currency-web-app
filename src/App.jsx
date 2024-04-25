import './App.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS, 
  CategoryScale, //represents non-numerical data
  LinearScale, //represents numerical data
  PointElement, //represents points on the chart
  LineElement, //refers to a line segment in a line chart
  Legend, //key that provides information about the data series or categories
  Tooltip, // small pop-up box that appears when you hover over a data poin
  Title, // Title of the chart
} from 'chart.js'

ChartJS.register( //need to be registered to render on the application
  CategoryScale, 
  LinearScale,  
  PointElement, 
  LineElement, 
  Legend, 
  Tooltip, 
  Title,
)



function App() {
  return <div className="fullApp">
    <Header appName="Currency Web App" />
    <Buttons baseCurrency="USD" quoteCurrency1="ZAR" quoteCurrency2="EUR"/>
    <LineChart />
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

const LineChart = () => {
  const options = {}
  return (
    <div className="chart">
      <Line data={LineChartData} options={options} />
    </div>
  )
}

const LineChartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],

  datasets: [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      width: '800',
      height: '600',
      tension: 0.4,
    },
  ]
}



export default App