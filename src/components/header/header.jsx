import React from 'react'
import {Container} from './styles'
import {StaticQuery, graphql, Link} from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
          <Container>
            <Link>{data.site.siteMetadata.title}</Link>
            <Link>Social media</Link>
          </Container>
        )}
      />
    
  
)