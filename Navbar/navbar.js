import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "./logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const menuItems = [
    {
      id: 1,
      title: "home",
      offset: -100,
    },
    {
      id: 2,
      title: "about",
      offset: -120,
    },
    {
      id: 3,
      title: "apartments",
      offset: -500,
    },
    {
      id: 4,
      title: "testimonials",
      offset: -200,
    },
    {
      id: 5,
      title: "contact",
      offset: -200,
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Click occurred outside of navbar, so close the menu
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="navbar" ref={navbarRef} id="nav">
      <a href="" className="anch_logo">
        <img src={logo} alt="logo" className="logo" />{" "}
      </a>
      <ul className={`menu ${isNavOpen ? "menu-open" : "menu-closed"}`}>
        {menuItems.map((menu) => (
          <li className="menu_item">
            <Link
              className="anch_nav"
              onClick={closeMenu}
              to={menu.title}
              smooth={true}
              offset={menu.offset}
              duration={700}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`toggle_icon ${isNavOpen ? "sticky" : ""}`}
        onClick={toggleNav}
      >
        <span className="material-symbols-outlined">
          {isNavOpen ? "close" : "menu"}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
