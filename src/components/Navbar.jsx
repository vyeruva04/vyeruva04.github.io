import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/experience">Experience</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/interests">Other Interests</Link>
    </nav>
  );
}
