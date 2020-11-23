import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IPost } from '../interfaces';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { getLocaleDate } from '../utils';

interface PostShortProps {
  post: IPost;
}

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    post: {
      borderBottom: '1px solid grey',
      height: '100px',
    },
    link: {
      color: '#8ab4f8',
      textDecoration: 'underline dotted',
      '&:hover': {
        color: '#d2603a',
      },
    },
    title: {
      fontWeight: 'bold',
    },
  })
);

const PostShort: React.FC<PostShortProps> = (props: PostShortProps): React.ReactElement => {
  const classes = useStyles();
  const { frontmatter, slug } = props.post;

  return (
    <div className={classes.post}>
      <Box padding={0.75}>
        <Link className={classes.link} to={`/${slug}`}>
          <Typography className={classes.title} variant="body1" component="p">
            {frontmatter.title}
          </Typography>
        </Link>
      </Box>
      <Box padding={0.75}>
        <Typography variant="body2" color="textSecondary" component="p" noWrap>
          {frontmatter.description}
        </Typography>
      </Box>
      <Box padding={0.75}>
        <Typography variant="caption" color="textSecondary" component="p" noWrap>
          {getLocaleDate(frontmatter.dateCreated)}
        </Typography>
      </Box>
    </div>
  );
};

export default PostShort;
