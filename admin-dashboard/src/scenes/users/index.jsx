import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const perPage = 5;
  const start = (page - 1) * perPage;
  const selectedUsers = users.slice(start, start + perPage);

  return (
    <div>
      <Header
        title="Users Management"
        subtitle="Manage all registered users"
      />

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {selectedUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span>Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={start + perPage >= users.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;