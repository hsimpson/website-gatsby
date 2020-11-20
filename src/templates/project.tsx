import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getLocaleDate } from '../utils';

interface ProjectSite {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        dateCreated: string;
        dateUpdated: string;
      };
      body: string;
    };
  };
}

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      padding: '16px',
      flexGrow: 1,
    },
    title: {
      fontSize: '2em',
    },

    mdxbody: {
      fontSize: '1rem',
      '& a': {
        color: '#8ab4f8',
        textDecoration: 'underline dotted',

        '&:hover': {
          color: '#d2603a',
          // textDecoration: 'none',
        },
      },
      '& code': {
        backgroundColor: '#202020',
        color: '#d2603a',
        fontSize: '.75em',
        padding: '3px 5px',
        margin: '0 0.15rem',
        borderRadius: '4px',
        fontFamily: 'Fira Code',
      },
    },
  })
);

const Project: React.FC<ProjectSite> = (props: ProjectSite): React.ReactElement => {
  const classes = useStyles();
  const { frontmatter, body } = props.data.mdx;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={classes.root}>
        <Typography className={classes.title} variant="body1" component="h1">
          {frontmatter.title}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {`Created: ${getLocaleDate(frontmatter.dateCreated)}`}
          {frontmatter.dateUpdated ? `\u00A0\u00A0•\u00A0\u00A0updated: ${getLocaleDate(frontmatter.dateCreated)}` : ''}
        </Typography>
        <div className={classes.mdxbody}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        dateCreated
        dateUpdated
      }
    }
  }
`;
