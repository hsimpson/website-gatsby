import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { usePosts } from '../hooks/usePosts';
import PostShort from '../components/postshort';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      padding: '16px',
      flexGrow: 1,
    },
    grid: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateRows: 'repeat(auto-fill, 150px, 1fr)',
      padding: '0 25px',
    },
  })
);

const Posts = (): React.ReactElement => {
  const classes = useStyles();
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Posts" />
      <div className={classes.root}>
        <h1>Posts</h1>
        <div className={classes.grid}>
          {posts.map((post) => (
            <PostShort key={post.frontmatter.title} post={post}></PostShort>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
