import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers"
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setUsers(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>👨‍💻 Random Users</h1>

      <div className="users">
        {users.map((user, index) => (
          <UserCard
            key={user.login.uuid || index}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default App;