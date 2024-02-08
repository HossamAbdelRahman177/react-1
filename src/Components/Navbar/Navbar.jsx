import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg bg-app p-2 fixed-top">
  <div className="container ">

 <ul className="me-auto mt-3 ">
 <Link className="navbar-brand fs-2 fw-bold  text-light"  to="/#/">START FRAMEWORK</Link>
 </ul>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className={(nav)=> nav.isActive ==true? 'nav-link color-active fw-bolder ': 'nav-link text-white fw-bolder  '} to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(nav)=> nav.isActive ==true? 'nav-link color-active  fw-bolder': 'nav-link text-white  fw-bolder '} to="porotfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(nav)=> nav.isActive ==true? 'nav-link color-active  fw-bolder': 'nav-link text-white  fw-bolder '}to="contact">CONTACT</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    
    
    
    </>
}