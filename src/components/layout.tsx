/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { MuiThemeProvider, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: 64,
      // marginBottom: 64,
      minHeight: 'calc(100vh - 128px)',
    },
  })
);

const Layout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </MuiThemeProvider>
  );
};

export default Layout;
