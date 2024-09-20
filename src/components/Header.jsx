import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <h1>Welcome to NC News {user} !!</h1>
      <button className="sign-in-button">
        <Link to="/users">Sign in</Link>
      </button>
    </div>
  );
}
