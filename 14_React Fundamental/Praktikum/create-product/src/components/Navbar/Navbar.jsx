const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sn">
        <div className="container-fluid shadow-sm p-3 mb-5 bg-white rounded">
              <a href="#" className="navbar-brand" style={{ fontWeight: 500 }}> Simple header</a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-base-target="#menuNavbar"
                  arial-controls="menuNavbar">
                  <span className="navbar-toggler-icon" />
              </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="menuNavbar">
                <ul className="navbar-nav nav">
                    <li className="nav-item1">
                        <a href="#" className="nav-link text-light">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-primary">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-primary">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-primary">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-primary">Aboout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
