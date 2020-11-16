import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LoremIpsum from '../components/loremipsum';

const ProjectPage = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <LoremIpsum></LoremIpsum> */}
      <h1>Projects</h1>
      <p>here are the projects</p>
    </Layout>
  );
};

export default ProjectPage;
