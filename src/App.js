import React, { useState } from 'react';
import { productsData } from './data/products';
import { storesData } from './data/stores';
import useFilteredData from './hooks/useFilteredData';
import { Filter } from './components/Filter';
import Graph from './components/Graph';

const App = () => {
  const [selectedStore, setSelectedStore] = useState(parseInt(storesData[0]?.id_store, 10));
  const [selectedProduct, setSelectedProduct] = useState(productsData[0].id_product.toString());
  const filteredData = useFilteredData(selectedStore, selectedProduct);
  
  const distinctStoresInFilteredData = [...new Set(filteredData.map(item => item.id_store))];

  return (
    <div>
      <Filter 
        stores={storesData} 
        products={productsData} 
        onStoreChange={setSelectedStore}
        onProductChange={setSelectedProduct}
        selectedStore={selectedStore}
        selectedProduct={selectedProduct}
      />
      {distinctStoresInFilteredData.map(storeId => {
        const dataForStore = filteredData.filter(item => item.id_store === storeId);
        return (
          <div key={storeId}>
            <Graph data={dataForStore} />
          </div>
        );
      })}

    </div>
  );
}

export default App;
