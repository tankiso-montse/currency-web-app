import PropTypes from "prop-types";
import { useState } from "react";
import { getPastWeekDates } from "../App";
// import LineChart from './line-chart';
const Buttons = ({
  setSelectedCurrency,
  setData,
  baseCurrency,
  quoteCurrency1,
  quoteCurrency2,
}) => {
  const option1 = `${baseCurrency} / ${quoteCurrency1}`; // using backticks, JavaScript will interpret ${} as an expression to be evaluated and not a string
  const option2 = `${baseCurrency} / ${quoteCurrency2}`;
  const [selected, setSelected] = useState(option1);
  // const [selectedCurrency, setSelectedCurrency] = useState('ZAR');
  // const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleClick = (option) => {
    setSelected(option);
    setSelectedCurrency(option.split("/")[1].trim());
    handleData(option.split("/")[1].trim());
  };

  const handleData = async (currency) => {
    const dates = getPastWeekDates();
    const baseUrl = "https://openexchangerates.org/api";
    const plotPoints = [];

    try {
      // Loop through each date and fetch the historical rates
      for (const date of dates) {
        const url = `${baseUrl}/historical/${date}.json?app_id=${apiKey}&base=USD&symbols=${currency}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const price = responseData.rates[currency];
        plotPoints.push([date, price]);
      }

      setData(plotPoints);
      console.log(plotPoints);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  Buttons.propTypes = {
    baseCurrency: PropTypes.string.isRequired,
    quoteCurrency1: PropTypes.string.isRequired,
    quoteCurrency2: PropTypes.string.isRequired,
    setSelectedCurrency: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
  };

  return (
    <div className="buttons">
      <button
        style={{
          backgroundColor: selected === option1 ? "rgb(75, 192, 192)" : "grey",
        }}
        onClick={() => handleClick(option1)}
      >
        {option1}
      </button>
      <button
        style={{
          backgroundColor: selected === option2 ? "rgb(75, 192, 192)" : "grey",
        }}
        onClick={() => handleClick(option2)}
      >
        {option2}
      </button>
      {/* {data && <LineChart data={data} selectedCurrency={selectedCurrency} />} */}
    </div>
  );
};

export default Buttons;
