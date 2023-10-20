import { Link } from "react-router-dom";

  const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <Link className="navbar-brand" to="/">WikiCountries</Link>
    </nav>
  )
}

export default Navbar
