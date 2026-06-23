import Header from "../../components/Header";
import Card from "../../components/Card";

import {
  DollarSign,
  Users,
  ShoppingCart,
  Package,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 800 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 1000 },
  { name: "May", sales: 1200 },
  { name: "Jun", sales: 900 },
];

const Dashboard = () => {
  return (
    <div>
      <Header
        title="Dashboard Overview"
        subtitle="Welcome back Admin"
      />

      <div className="cards">
        <Card
          title="Revenue"
          value="₹50,000"
          icon={<DollarSign size={22} />}
        />

        <Card
          title="Users"
          value="1,250"
          icon={<Users size={22} />}
        />

        <Card
          title="Orders"
          value="560"
          icon={<ShoppingCart size={22} />}
        />

        <Card
          title="Products"
          value="230"
          icon={<Package size={22} />}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: 350,
          marginTop: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>
          Sales Overview
        </h3>

        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4f46e5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="table-section">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#101</td>
              <td>Rahul Kumar</td>
              <td>
                <span className="status delivered">
                  Delivered
                </span>
              </td>
              <td>₹1,200</td>
            </tr>

            <tr>
              <td>#102</td>
              <td>Amit Singh</td>
              <td>
                <span className="status pending">
                  Pending
                </span>
              </td>
              <td>₹850</td>
            </tr>

            <tr>
              <td>#103</td>
              <td>Priya Sharma</td>
              <td>
                <span className="status delivered">
                  Delivered
                </span>
              </td>
              <td>₹2,100</td>
            </tr>

            <tr>
              <td>#104</td>
              <td>Neha Verma</td>
              <td>
                <span className="status processing">
                  Processing
                </span>
              </td>
              <td>₹1,500</td>
            </tr>

            <tr>
              <td>#105</td>
              <td>Rohit Kumar</td>
              <td>
                <span className="status delivered">
                  Delivered
                </span>
              </td>
              <td>₹950</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;