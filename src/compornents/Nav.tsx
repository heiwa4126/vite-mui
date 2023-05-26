import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/ex1">Ex1</Link>
    </nav>
  );
}

export default Nav;
