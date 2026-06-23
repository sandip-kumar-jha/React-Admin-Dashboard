import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./scenes/dashboard";
import Users from "./scenes/users";
import Products from "./scenes/products";
import Orders from "./scenes/orders";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />

      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />

      <Route
        path="/orders"
        element={
          <Layout>
            <Orders />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
