import React, { useEffect, useState } from 'react';
import { ProductModel } from './types/productModel';
import ProductTable from './components/productTable';
import { View } from 'react-native';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the URL to fetch data from
    const apiUrl = 'https://dummyjson.com/products';

    // Use the fetch API to make the network request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data received from the server
        setProducts(data.products);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <View>
      <ProductTable products={products}/>
    </View>
  );
}

export default HomePage;
