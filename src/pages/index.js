import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const IndexPage = ({data}) => (
  <div>
    <h1>Welcome</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>This is the wheat Gatsby site.</p>
    <p>I'm following the level up tuts gatsby tutorial</p>
    <p>Here's a page for colours on   <a href="https://www.w3schools.com/colors/colors_names.asp">w3schools</a></p>
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

`