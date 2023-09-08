import React from "react";
import { ProductModel } from "../types/productModel";
/**
 * @param {ProductModel} props.products - A description of the 'products' prop
 */
const ProductTable = (props) => {
  const { products } = props;

  const onViewProduct = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <table style={{ borderWidth: 1, border: "1px solid black", borderColor: "black", }}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <tr key={index}>
            <td>
              <img
                src={product.images[0]}
                alt={product.title}
                width="50"
                height="50"
              />
            </td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>{product.stock}</td>
            <td>${product.price}</td>
            <td>
              <button onClick={() => onViewProduct(product.id)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
};

export default ProductTable;
