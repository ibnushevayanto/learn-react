import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  const totalMaximum = Math.max(...props.datas.map((res) => res.value));
  
  return (
    <div className="chart">
      {props.datas.map((data) => (
        <ChartBar
          value={data.value}
          key={data.label}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
