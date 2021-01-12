// src/templates/post.jsx
import React from "react";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <p>
      {data}
    </p>
  </Layout>
);