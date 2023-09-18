import React from 'react';
import { Line } from 'react-chartjs-2';
import useGraphData from '../hooks/useGraphData';

const Graph = ({ data }) => {
  const { chartData, chartOptions } = useGraphData(data);

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default Graph;