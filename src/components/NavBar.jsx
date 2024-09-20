import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div className="nav-bar">
      <p>Hello {user}</p>
      <Link to="/articles">articles</Link>
      <Link to="/articles?topic=coding">Coding</Link>
      <Link to="/articles?topic=cooking">Cooking</Link>
      <Link to="/articles?topic=football">Football</Link>
    </div>
  );
}
