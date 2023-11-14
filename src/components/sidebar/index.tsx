import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { links } from "../../utils/constants";
import { Link } from "react-router-dom";

import styles from "./Sidebar.scss";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const isOpen = true;
  return (
    <SidebarContainer>
      <aside className={isOpen ? "sidebar show-sidebar" : "show-sidebar"}>
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='close-btn' type='button'>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, url, text }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to='/checkout'>Checkout</Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  text-align: center;
  ${styles}
`;
