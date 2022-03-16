import React, { useState } from "react";
import styled from "styled-components";
import { FiAlignRight } from "react-icons/fi";
import resume_vrushikvisavadiya from "./resume.pdf";

// #419FDE

const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em 2em;
  z-index: 1;
  background: #040f16;

  
a {
  text-decoration: none;
  color: #fdfffc;
  display: inline-block;
}

`;
const NavContainer = styled.div`
  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-top: 0.5em;
     /* color: #fff; */
  }

  li + li {
    margin-top: 2em;
  }
  .nav-links a {
    display: block;
    transition: all 0.3s ease-in;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;
  }

  .nav-links a:hover {
    color: #7685f9;
  }
  .show-nav {
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    .nav-btn {
      display: none;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-links a {
      font-size: 1.3rem;
    }
    li + li {
      margin: 0 0 0 2em;
    }
  }
`;
const Div = styled.div`
  .resume {
    color: #7685f9;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #7685f9;
    font-weight: 600;
    font-size: 2rem;
  }
  .nav-btn {
    background: transparent;
    border: unset;
    cursor: pointer;
  }
  .nav-icon {
    font-size: 2.5rem;
    color: #7685f9;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header>
        <NavContainer>
          <Div>
            <NavHeader>
              <a href="#home">
                <h1 className="logo">Vrushik</h1>
              </a>
              <button type="button" className="nav-btn" onClick={handleToggle}>
                <FiAlignRight className="nav-icon" />
              </button>
            </NavHeader>
            <ul
              className={isOpen ? "show-nav nav-links" : "nav-links"}
              onClick={handleToggle}
            >
              <li>
                <a href="#about">About</a>
              </li>
              {/* <li>
                <a href="#Experience">Experience</a>
              </li> */}
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <div>
                  <a href={resume_vrushikvisavadiya} className="resume">
                    Resume
                  </a>
                </div>
              </li>
            </ul>
          </Div>
        </NavContainer>
      </Header>
    </>
  );
};

export default Navbar;
