import React from 'react'
import styled from 'styled-components'

import styles from './Footer.scss'

const Footer = () => {
  return (
    <Wrapper>
        <h5>
            &copy; {new Date().getFullYear()}
            <span> CuongNH</span>            
        </h5>
        <h5> All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--clr-black);
    text-align: center;
    @media (min-width: 776px) {
        flex-direction: row;
    }

    ${styles}
`

export default Footer;