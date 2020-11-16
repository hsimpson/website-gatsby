import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LoremIpsum from '../components/loremipsum';

const IndexPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <LoremIpsum></LoremIpsum> */}
      <h1>Hello World!</h1>
      <p>hello again</p>
    </Layout>
  );
};

export default IndexPage;
