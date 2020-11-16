import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    grow: {
      flexGrow: 1,
    },

    footer: {
      width: '100%',
      height: '64px',
      padding: '0 10px',
      borderTop: '2px solid #525252',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    link: {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#ffffff',
      '& :hover': {
        textDecoration: 'none',
      },
    },
  })
);

const Footer: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          image
        }
      }
    }
  `);

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <div>
          &copy; {new Date().getFullYear()} by {data.site.siteMetadata.author}. All rights reserved.
        </div>
        <div className={classes.grow}></div>
        <div>
          Powered by{' '}
          <a className={classes.link} href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
            Gatsby
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
