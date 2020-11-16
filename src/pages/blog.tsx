import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LoremIpsum from '../components/loremipsum';

const BlogPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <LoremIpsum></LoremIpsum> */}
      <h1>Blog</h1>
      <p>here are the blog posts</p>
    </Layout>
  );
};

export default BlogPage;
