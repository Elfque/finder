import { useEffect, useState } from "react";
import axios from "axios";
import UserTile from "./UserTile";
import "./style.css";
const GitFinder = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="finder">
      <div className="topic">Github Finder</div>
      <div className="users_tile">
        {users?.map((user, idx) => (
          <UserTile user={user} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default GitFinder;
