import React from "react";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as TitleChart,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TitleChart,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = coinHistory?.data?.history?.map((res) => res.price) || [];
  const coinTimestamp =
    coinHistory?.data?.history?.map((res) =>
      new Date(res.timestamp).toLocaleDateString()
    ) || [];

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        data: coinPrice,
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};

export default LineChart;
