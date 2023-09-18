import { useMemo } from 'react';

const useGraphData = (data) => {
  const wastes = data.map(item => {
    const wasteValue = item.delivery - item.demand;
    return wasteValue > 0 ? wasteValue : 0; 
  });
  const chartOptions = {
    scales: {
      x: {
          type: 'category'
      },
      ticks: {
        beginAtZero: true
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, chartData) {
          const label = chartData.datasets[tooltipItem.datasetIndex].label || '';
          const value = chartData.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          debugger;
          if (label === 'Adjustments') {
              return `${adjustments[tooltipItem.index]} (Waste: ${wastes[tooltipItem.index]})`;
          }
          
          return `${label}: ${value}`;
        }
      }
    }
  };
       
  const adjustments = useMemo(() => data.map(item => {
    if (item.delivery > item.recommendation) return 'improved';
    if (item.delivery < item.recommendation) return 'deteriorated';
    return 'neutral';
  }), [data]);
    
  const adjustmentColors = useMemo(() => adjustments.map(status => {
    switch (status) {
      case 'improved':
        return 'rgb(0, 128, 0)'; 
      case 'deteriorated':
        return 'rgb(255, 0, 0)'; 
      default:
        return 'rgba(0, 0, 0, 0)';
    }
  }), [adjustments]);
      
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Recommendations',
        data: data.map(item => item.recommendation),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Demand',
        data: data.map(item => item.demand),
        fill: false,
        borderColor: 'rgb(255, 205, 86)',
        tension: 0.1
      },
      {
        label: 'Deliveries',
        data: data.map(item => item.delivery),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Adjustments',
        data: data.map(item => item.delivery),
        fill: false,
        borderColor: 'rgba(0, 0, 0, 0)', // Transparent line
        pointBorderColor: adjustmentColors,
        pointBackgroundColor: adjustmentColors,
        pointRadius: 5,
        tension: 0.1,
      }
    ]
  };
  return { chartData, chartOptions };
}

export default useGraphData;