import React from "react";
import styled from "styled-components"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { links } from "../../utils/constants";
import CartButton from "../cart-button";

const Navbar = () => {
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="comfy sloth" />
                    </Link>
                    <button type="button" className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map((link)=>{
                        const {id, text, url} = link
                        return <li key={id}>
                            <Link to={url}>
                                {text}
                            </Link>
                        </li>
                    })}
                </ul>
                <CartButton />
            </div>
        </NavContainer>
    )
  };

export default Navbar

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${styles}
}
`;
