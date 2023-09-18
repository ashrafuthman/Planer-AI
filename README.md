# PlanerAI Technical Test

## Overview

This repository represents a technical test for PlanerAI. The primary goal is to provide an interactive data visualization tool that offers insights into deliveries, sales, and recommendations. The project is built using React and leverages the `react-chartjs-2` library for visualization.

## Features

### 1. **Dynamic Data Visualization**
  - A data visualization component (`Graph`) is built using React and the `react-chartjs-2` library.
  - Data is graphically represented with `Line` charts showing Recommendations, Deliveries, and Demands.
  - Additionally, Adjustments (improved, deteriorated, or neutral) are highlighted within the graph with distinct colors.

### 2. **Interactive Filtering**
  - Users can filter data based on selected stores (`StoreFilter`) and products (`ProductFilter`).
  - A `Filter` component wraps the store and product filters to provide a seamless interface.
  - The `App` component handles changes in filter selections and fetches appropriate data sets for visualization.

### 3. **Data Transformation and Processing**
  - The `useFilteredData` hook fetches, filters, and aggregates data from different datasets: recommendations, deliveries, and sales.
  - Data sets are filtered based on the selected store and product.
  - Aggregated data is then sorted by date.

### 4. **Custom Graph Data Computation**
  - The `useGraphData` hook computes wastes, adjustments, and generates chart data tailored for visualization.
  - Recommendations, Deliveries, and Demands are plotted. Adjustments data is calculated and color-coded: improved (green), deteriorated (red), and neutral (transparent).

### 5. **React State Management**
  - `useState` and `useEffect` are leveraged to manage component state and side-effects respectively. This ensures that the UI is always in sync with data changes.

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:ashrafuthman/Planer-AI.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## Progress Update

In the past 3 hours, the foundation for this interactive data visualization tool has been laid down. I've integrated state management, data filtering, and transformation hooks, and created a modular React component structure. The goal has been to showcase an efficient and interactive tool for visualizing deliveries, sales, and recommendations data.

## Future Considerations

If more time is provided, the following enhancements are planned:

- **API Integration**: Instead of static datasets, an API will be implemented to fetch real-time data.
- **TypeScript Integration**: To ensure type safety and enhance code quality, TypeScript will be integrated.
- **More Unit Tests**: To validate the correctness of each component and utility function.
