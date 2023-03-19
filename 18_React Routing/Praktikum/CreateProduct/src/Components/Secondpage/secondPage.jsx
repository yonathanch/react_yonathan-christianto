import {useNavigate } from "react-router-dom"
import './Secondpage.css'
import Logoprima from '../../assets/Logo.png'

const SecondPage = () => {
    const navigate = useNavigate()
    return(
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WelcomePage</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    crossOrigin="anonymous"
  />
  <div className="background-image">
  <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container-fluid ml-auto">
      <a className="navbar-brand ms-5 text-light" href="#">
        {" "}
        <img src={Logoprima} style={{ width: 30 }} alt="logo" />{" "}
        PrimaCode
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
          <li className="nav-item  me-2">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link text-light" href="#">
              Learning path
            </a>
          </li>
          <li className="nav-item dropdow me-2">
            <a
              className="nav-link dropdown-toggle text-light"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Program
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Front end Web
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Backend End Web
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </li>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-secondary "
              type="search"
              placeholder="Search.."
              aria-label="Search"
            />
          </form>
        </ul>
        <a href="#" className="btn btn-outline-success me-3 text-light">
          Sign In
        </a>
        <a href="#" className="btn text-light">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
  <br />
  <br />
  <br />
  <br />
  <div className="content">
    <div>
      <h1
        className="text-light text-center"
        style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
      >
        let's start now and build here
      </h1>
      <h3
        className="text-light text-center"
        style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
      >
        Enjoy It
      </h3>
    </div>
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-success btn-lg text-center justify-content-center mt-3"
        style={{ fontFamily: 'system-ui, "Helvetica Neue", sans-serif' }}
        id="submit" onClick={() => navigate ('/homepage')}>Go to Create Product</button>
    </div>
  </div>
  </div>
</>

    )
}

export default SecondPage

