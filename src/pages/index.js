import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import GlobalStyled from '../styles/globalStyles'
import Posts from '../components/Post'




export default ({data}) => (
  <>
  <GlobalStyled />
    <Layout>
    <Posts data={data}/>
    </Layout>
  </>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;


