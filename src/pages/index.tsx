import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetaData';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    rootimage: {
      position: 'absolute',
      top: '64px',
      left: 0,
      right: 0,
      bottom: '64px',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(50%) blur(2px)',
      },
    },
    root: {
      position: 'absolute',
      top: '64px',
      left: 0,
      bottom: '64px',
      right: 0,
      padding: '16px',
      flexGrow: 1,
      '& p': {
        fontSize: '1.2rem',
      },
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

const IndexPage = (): React.ReactElement => {
  const { author } = useSiteMetadata();
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.rootimage}>
        <img src="/images/newton-gradle.png"></img>
      </div>
      <div className={classes.root}>
        <h1>{author}</h1>
        <p>
          Welcome to my site. On this site I show some of my private{' '}
          <Link className={classes.link} to={`/projects`}>
            projects.
          </Link>
        </p>
        <p>
          I will also do some{' '}
          <Link className={classes.link} to={`/posts`}>
            blog posts.
          </Link>
        </p>
        <p>
          There are also some more information{' '}
          <Link className={classes.link} to={`/about`}>
            about me.
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
