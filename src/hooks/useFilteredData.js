import { useState, useEffect } from 'react';
import { deliveriesData } from '../data/deliveries';
import { recommendationsData } from '../data/recommendations';
import { salesData } from '../data/sales';

const useFilteredData = (selectedStore, selectedProduct) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredRecommendations = recommendationsData.filter(rec => {
      const storeMatch = selectedStore ? rec.id_store === parseInt(selectedStore, 10) : true;
      const productMatch = selectedProduct ? rec.id_product === parseInt(selectedProduct, 10) : true;
      return storeMatch && productMatch;
    });

    const filteredDeliveries = deliveriesData.filter(delivery => {
      const storeMatch = selectedStore ? delivery.id_store === parseInt(selectedStore, 10) : true;
      const productMatch = selectedProduct ? delivery.id_product === parseInt(selectedProduct, 10) : true;
      return storeMatch && productMatch;
    });
  
    const data = filteredRecommendations.map(rec => {
      const correspondingDelivery = filteredDeliveries.find(delivery => 
        delivery.id_product === rec.id_product && 
        delivery.id_store === rec.id_store &&
        delivery.target_date === rec.target_date
      );
      const correspondingSales = salesData.find(sale => 
        sale.id_product === rec.id_product && 
        sale.id_store === rec.id_store &&
        sale.target_date === rec.target_date
      );
  
      return {
        date: rec.target_date,
        recommendation: rec.recommendation,
        delivery: correspondingDelivery ? correspondingDelivery.delivery_qty : 0,
        demand: correspondingSales ? correspondingSales.demand_qty : 0
      };
    });

    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    setFilteredData(data);
  }, [selectedStore, selectedProduct]);

  return filteredData;
}

export default useFilteredData;