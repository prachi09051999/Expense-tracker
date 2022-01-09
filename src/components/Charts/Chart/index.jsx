import ChartBar from '../ChartBar';
import './style.css';

const Chart = (props) => {

  const dataPointNumbers = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointNumbers);

return (
  <div className="chart">
    {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={totalMax}/>)}
  </div>
);

}

export default Chart;