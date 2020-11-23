import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      padding: '16px',
      flexGrow: 1,
      '& p': {
        fontSize: '1rem',
      },
    },
  })
);

const IndexPage = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <h1>Hello World!</h1>
        <p>hello again</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
