import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';

import styles from "./CartButton.scss";

const CartButton = () => {
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>10</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  ${styles}
`

export default CartButton