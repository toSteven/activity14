import { Outlet, Link } from "react-router-dom";

function Layout() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">React Routing</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="navbar-brand text-white" aria-current="page">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="about" className="navbar-brand text-white">About</Link>
              </li>

              <li className="nav-item">
                <Link to="services" className="navbar-brand text-white">Services</Link>
              </li>

              <li className="nav-item">
                <Link to="contact" className="navbar-brand text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="text-center text-lg-start bg-dark  mt-auto">
        <p className="text-center text-white p-4">This is footer</p>
      </footer>
    </>
  )
}

export default Layout
