import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">🚀 Admin Panel</h2>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <ShoppingBag size={18} />
          Products
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <Package size={18} />
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;