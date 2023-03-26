const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        register
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/login">
                        login
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

      
    
    )
}

export default Navbar