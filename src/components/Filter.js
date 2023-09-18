import React from 'react';

const StoreFilter = ({ stores, onChange, selectedStore }) => (
    <select value={selectedStore} onChange={(e) => onChange(e.target.value)}>
        {stores.map(store => <option key={store.id_store} value={store.id_store}>{store.store_label}</option>)}
    </select>
);

const ProductFilter = ({ products, onChange, selectedProduct }) => (
    <select value={selectedProduct} onChange={(e) => onChange(e.target.value)}>
        {products.map(product => <option key={product.id_product} value={product.id_product}>{product.name_product}</option>)}
    </select>
);

export const Filter = ({ stores, products, onStoreChange, onProductChange, selectedStore, selectedProduct }) => (
  <div>
    <StoreFilter stores={stores} onChange={onStoreChange} selectedStore={selectedStore} />
    <ProductFilter products={products} onChange={onProductChange} selectedProduct={selectedProduct} />
  </div>
);