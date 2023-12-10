import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { react, switchCase } from "@babel/types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/logo.svg";
import { links } from "../../utils/constants";
import styles from "./Sidebar.scss";

import { RootState } from "../../store";
import { openSidebar, closeSidebar } from "../../reducers/sidebar_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../../actions";
import CartButton from "../cart-button";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebarReducer);
  const dispatch = useDispatch();

  const handleChange = (action: string) => {
    switch (action) {
      case SIDEBAR_OPEN:
        return dispatch(openSidebar());
      case SIDEBAR_CLOSE:
        return dispatch(closeSidebar());
      default:
        return false;
    }
  };

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
        <CartButton />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  text-align: center;
  ${styles}
`;
