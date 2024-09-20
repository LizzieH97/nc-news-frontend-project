import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../api/APICalls";
import { UserContext } from "../contexts/UserContext";

export default function AllUsers() {
  const [toggle, setToggle] = useState("false");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState("grumpy19");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getAllUsers().then((returnedUsers) => {
      setUsers(returnedUsers);
    });
  }, []);

  const handleToggle = (event) => {
    event.preventDefault();
    const selectedUser = event.target.value || event.target.parentNode.value;
    setUser(selectedUser);
  };

  return (
    <div className="user-grid-container">
      <h1 className="user-title">Select your user: </h1>
      {users.map((selectedUser) => {
        return (
          <button
            key={selectedUser.username}
            onClick={handleToggle}
            value={selectedUser.username}
            className="items"
          >
            <ul key={selectedUser.username} className="user-grid-item">
              <li>{selectedUser.username}</li>
              <li>{selectedUser.name}</li>
              <img
                onClick={handleToggle}
                value={selectedUser.username}
                src={selectedUser.avatar_url}
                className="user-img"
              />
            </ul>
          </button>
        );
      })}
    </div>
  );
}
