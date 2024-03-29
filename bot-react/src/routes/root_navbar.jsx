import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AccountContext } from "./account-context";
import React, { useState } from "react";
import { UserContext } from "../utils/UserContext";
// import { Outlet } from "react-router-dom";
// import {BankProvider} from '../utils/BankContext';

export default function Root() {
  const [value, setValue] = useState("hello from context");
  // const [user, setUser] = useState(null);

  // const providerUser = useMemo(() => ({ user, setUser}), [user, setUser])

    return (
      <>
      <UserContext.Provider value={{users:[{name: 'abel', email: 'abel@mit.edu', password: 'shmuck'}]}}>
      <AccountContext.Provider value={{value, setValue}}>
        <div>
        
         {/* Took out 'bg-body-secondary' from <nav className> Added 'navbar-dark bg-dark' */}
<nav style={{position: 'fixed', width: '100%', backgroundColor: 'darkgreen'}} className="nav nav-pills nav-justified navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

  <div className="container-fluid">
    <Link className="navbar-brand " to={'home'}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
  <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"/>
  <path fillRule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"/>
</svg></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      {/* CONTEXT */}
      
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
       
        </AccountContext.Provider>
        </UserContext.Provider >
      </>

    );
  }