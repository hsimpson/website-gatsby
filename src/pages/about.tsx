import { Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetaData';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      padding: '16px',
      flexGrow: 1,
      fontSize: '1rem',
      // '& p': {},
    },
    centerimg: {
      display: 'flex',
      justifyContent: 'center',
    },
    largeimg: {
      width: '200px',
      height: '200px',
    },
    link: {
      color: '#8ab4f8',
      textDecoration: 'underline dotted',
      '&:hover': {
        color: '#d2603a',
      },
    },
  })
);

const AboutPage = (): React.ReactElement => {
  const { author } = useSiteMetadata();
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="About" />
      <div className={classes.root}>
        <h1>About me</h1>
        <div className={classes.centerimg}>
          <Avatar className={classes.largeimg} src="/images/me.jpg"></Avatar>
        </div>
        <p>My name is {author}, I am from Gersthofen a small city in Bavaria, Germany.</p>
        <p>
          At my daily job I lead a development team, we are developing frontend web applications and mobile applications
          for iOS and Android
        </p>
        <p>
          In my freetime I do graphics programming for the web, with WebGL and WebGPU. See some of my{' '}
          <Link className={classes.link} to={`/projects`}>
            projects.
          </Link>
        </p>
        Technologies used in my projects:
        <ul>
          <li>Languages: TypeScript, JavaScript, C++, GLSL, Python, Java, Swift, SCSS, HTML5</li>
          <li>Web frameworks and libraries: React, Express, Node, WebGL, Three.js</li>
          <li>Other libs and tech: Docker, Vulkan, OpenGL, Augmented Reality</li>
        </ul>
      </div>
    </Layout>
  );
};

export default AboutPage;
