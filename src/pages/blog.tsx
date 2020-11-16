import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>here are the blog posts</p>
    </Layout>
  );
};

export default BlogPage;
