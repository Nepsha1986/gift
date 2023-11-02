import React, { useEffect, useState } from "react";
import productService, { type ProductDTO } from "@services/products.service.ts";

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        setError(true);
      });
  }, []);

  if (error) return <div>Error!</div>;

  return (
    <div>
      <h2>Happy gift-hunting!</h2>
      <p>
        {
          "Within the list, you'll find a handpicked assortment of gift ideas, each complete with a name, description, and product links. This provides you with a convenient way to browse and discover the ideal gift for any occasion. Enjoy your gift-hunting experience!"
        }
      </p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
