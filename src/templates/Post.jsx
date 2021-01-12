// src/templates/post.jsx
import React from "react";
import Layout from "../components/Layout";

export default ({ data }) => (
  <Layout>
    <p>
      {data}
    </p>
  </Layout>
);