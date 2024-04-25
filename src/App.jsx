import './App.css'
import Header from './components/header';
import Buttons from './components/buttons';
import LineChart from './components/line-chart';
function App() {
  return <div className="fullApp">
    <Header appName="Currency Web App" />
    <Buttons baseCurrency="USD" quoteCurrency1="ZAR" quoteCurrency2="EUR"/>
    <LineChart />
  </div>;
}

export const getPastWeekDates = () => {
  const endDate = new Date('2024-04-24');
  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 6); // Subtract 6 days to get the start date
  const dates = [];
  while (startDate <= endDate) {
    dates.push(startDate.toISOString().split('T')[0]);
    startDate.setDate(startDate.getDate() + 1); // Increment the date by 1 day
  }
  return dates;
};



export default App