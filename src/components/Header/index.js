import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from "gatsby-image";
import logo from '../../images/worthcoding.svg';


const HeaderContainer = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
position: relative;
z-index: 2;
`;


const HeaderWrapper = styled.div`
background: Darkslategrey;
margin-bottom: 1.45rem;
overflow: hidden;
position: relative;
h1 {
  img {
    height: 80px;
  }
}
`;


const Header = ({data}) => (
  <HeaderWrapper>
    <HeaderContainer>
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
      <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
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
    </HeaderContainer>
    <Img style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'

    }}
     sizes ={data.background.sizes}
     />
    
  </HeaderWrapper>
)

export default Header




