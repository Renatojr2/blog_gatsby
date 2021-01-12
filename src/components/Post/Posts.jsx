import React from 'react';
import { Link } from 'gatsby';
import {Container,P, Post, Title } from './styles'


export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <Container key={node.fields.slug}>
        <Link to={node.fields.slug}><Title>{node.frontmatter.title}</Title></Link>
        <P className="post-date">{node.frontmatter.date}</P>
        <P>{node.frontmatter.description}</P>
      </Container>
    ))
  );
  return (
    <Post>
      {posts}
    </Post>
  )
}