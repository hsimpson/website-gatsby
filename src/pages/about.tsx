import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About me</h1>
      <p>{'this is me ;-)'}</p>
    </Layout>
  );
};

export default AboutPage;
