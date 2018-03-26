import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import logo from '../../images/worthcoding.svg';


const HeaderWrapper = styled.div`
background: Crimson;
margin-bottom: 1.45rem;
`;


const Header = () => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="logo" />
        </Link>
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header
