import Header from "../../components/Header";

const orders = [
  {
    id: "#101",
    customer: "Rahul Kumar",
    product: "Nike Shoes",
    amount: "₹1,200",
    status: "Delivered",
  },
  {
    id: "#102",
    customer: "Amit Singh",
    product: "T-Shirt",
    amount: "₹850",
    status: "Pending",
  },
  {
    id: "#103",
    customer: "Priya Sharma",
    product: "Smart Watch",
    amount: "₹2,100",
    status: "Delivered",
  },
  {
    id: "#104",
    customer: "Neha Verma",
    product: "Headphones",
    amount: "₹1,500",
    status: "Processing",
  },
  {
    id: "#105",
    customer: "Rohit Kumar",
    product: "Backpack",
    amount: "₹950",
    status: "Delivered",
  },
];

const Orders = () => {
  return (
    <div>
      <Header
        title="Orders Management"
        subtitle="Track and manage customer orders"
      />

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>

                <td>
                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;