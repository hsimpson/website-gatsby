import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LoremIpsum from '../components/loremipsum';

const AboutPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <LoremIpsum></LoremIpsum> */}
      <h1>About me</h1>
      <p>{'this is me ;-)'}</p>
    </Layout>
  );
};

export default AboutPage;
