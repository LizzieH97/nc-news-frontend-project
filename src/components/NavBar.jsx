import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div className="nav-bar">
      <p className="gap-maker">Hello {user}!</p>

      <Link to="/articles" className="gap-maker">
        Click here to see all articles
      </Link>
      <p>Select a category below:</p>
      <Link to="/articles?topic=coding" className="small-gap-maker">
        Coding
      </Link>
      <Link to="/articles?topic=cooking" className="small-gap-maker">
        Cooking
      </Link>
      <Link to="/articles?topic=football">Football</Link>
    </div>
  );
}
