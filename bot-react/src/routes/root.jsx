import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Root() {


    return (
      <>
        <div>
         
         {/* Took out 'bg-body-secondary' from <nav className> Added 'navbar-dark bg-dark' */}
<nav style={{position: 'fixed', width: '100%', backgroundColor: 'darkgreen'}} className="nav nav-pills nav-justified navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'home'}><img src="..." alt='Bank Logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px"}}>
        
        <li className="nav-link">
          <NavLink to={'home'} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>
            Home
            </NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'create-account'} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Create Account</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'pics'} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Pics</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'about'} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>About</NavLink>
        </li>

        <li className="nav-link dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Albums
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


          {/* <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'about'}>About</Link>
              </li>
              <li>
                <Link to={'contact'}>Contact</Link>
              </li>
            </ul>
          </nav> */}
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }