import Header from "../../components/Header";

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    category: "Footwear",
    price: "₹2,999",
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "Clothing",
    price: "₹799",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Accessories",
    price: "₹4,999",
  },
  {
    id: 4,
    name: "Backpack",
    category: "Bags",
    price: "₹1,299",
  },
];

const Products = () => {
  return (
    <div>
      <Header
        title="Products Management"
        subtitle="Manage all available products"
      />

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;