import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


const IndexPage = ({data}) => (
  <div>
    <h1>Welcome</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>This is the wheat Gatsby site.</p>
    <p>Here's a page for colours on   <a href="https://www.w3schools.com/colors/colors_names.asp">w3schools</a></p>
    <p>Here's <a href="http://localhost:8000/___graphql">graphql</a></p>
    <p>Here's <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/">plugin sharp docs</a></p>
    <p>Remember that gql queires cannot be placed directly in components, but rather
      have to be in layouts, and passed down as props.  
    </p>
  </div>
)

export default IndexPage


export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    
  }
`;