import PropTypes from "prop-types";
import { getPastWeekDates } from "../App";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, //represents non-numerical data
  LinearScale, //represents numerical data
  PointElement, //represents points on the chart
  LineElement, //refers to a line segment in a line chart
  Legend, //key that provides information about the data series or categories
  Tooltip, // small pop-up box that appears when you hover over a data poin
  Title, // Title of the chart
} from "chart.js";

ChartJS.register(
  //need to be registered to render on the application
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
);
const LineChart = ({ data}) => {
  // const options = {}
  const labels = getPastWeekDates();
  
  const LineChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Historical Exchange Rates for USD to ZAR and USD to EUR',
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: "rgb(75, 192, 192)",
        },
        grid: {
          color: "#e73b3be3", // Set x-axis grid color
        },
      },
      y: {
        title: {
          display: true,
          text: `Exchange Rates`,
          color: "rgb(75, 192, 192)",
        },
        grid: {
          label: "Exchange Rates",
          color: "#e73b3be3", // Set y-axis grid color
        },
      },
    },
  };

  LineChart.propTypes = {
    data: PropTypes.object.isRequired,
    selectedCurrency: PropTypes.string.isRequired,
  };
  return (
    <div className="chart">
      <Line data={LineChartData} options={options} />
    </div>
  );
};

export default LineChart;
