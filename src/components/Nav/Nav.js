import { useState } from 'react';
import { Link } from "react-router-dom";
import Intakeq from '../intakeq/intakeq';

export default function Nav(props) {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <ul className="navContainer">
        <span>
          <Link className="linkComponent" to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/location">
            Location
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/services">
            Services
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/medical">
            Insurance
          </Link>
        </span>
        <span>
          <Link className="linkComponent" to="/about">
            Contact
          </Link>
        </span>
      </ul>
        <span className='bookNow'>
          <Intakeq />
        </span>

      {/* <div className="hamburger" onClick={toggleMobileMenu}> */}
      <div className={open ? 'hamburger openHamburger' : 'hamburger closedHamburger'} onClick={() =>setOpen(open ? false : true)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={open ? 'navMobileContainer' : 'closed'}>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/">
            Home
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/location">
            Location
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/services">
            Services
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/medical">
            Insurance
          </Link>
        </div>
        <div className="navLinkComponentContainer">
          <Link className="navLinkComponent" to="/about">
            Contact
          </Link>
        </div>
        <span className='navLinkComponentContainer'>
          <Intakeq  className="navLinkComponent"/>
        </span>
      </ul>
    </>
  );
}
