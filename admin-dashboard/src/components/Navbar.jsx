import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search users, orders..."
        className="search"
      />

      <div className="right">
        <Bell size={22} />

        <img
          src="https://i.pravatar.cc/60"
          alt="profile"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;