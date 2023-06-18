import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logOut() {
    setAuth(null);

    if (window.location.href === "/admin") {
      navigate("/");
    }
  }

  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {auth ? (
        <>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <button id="logoutBtn" onClick={logOut}>
            Log out
          </button>
        </>
      ) : (
        <li>
          <Link to="/login">Log in</Link>
        </li>
      )}{" "}
    </nav>
  );
}
