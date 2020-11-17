import React from 'react';

import { Link } from 'gatsby';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SocialLinks from './sociallinks';
import { useSiteMetadata } from '../hooks/useSiteMetaData';

interface PageLink {
  name: string;
  to: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },

    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },

    link: {
      display: 'flex',
      height: 64,
      alignItems: 'center',
      padding: '0 10px',
      '& a': {
        color: '#ffffff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        '& :hover': {
          textDecoration: 'none',
        },
      },
    },

    linkformobile: {
      color: '#ffffff',
      textDecoration: 'none',
      '& :hover': {
        textDecoration: 'none',
      },
    },
  })
);

const Header: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const pageLinks: PageLink[] = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Projects',
      to: '/projects',
    },
    // {
    //   name: 'Blog',
    //   to: '/blog',
    // },
    {
      name: 'About',
      to: '/about',
    },
  ];

  const mobileMenuId = 'menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {pageLinks.map((link) => (
        <Link key={link.name} className={classes.linkformobile} to={link.to}>
          <MenuItem>
            <Typography variant="body1">{link.name}</Typography>
          </MenuItem>
        </Link>
      ))}
      <SocialLinks></SocialLinks>
    </Menu>
  );

  const { title, image } = useSiteMetadata();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap color="inherit" className={classes.link}>
            <Link to="/">
              <Avatar alt={title} title={title} src={image} className={classes.large} />
            </Link>
          </Typography>

          <div className={classes.grow}></div>

          <div className={classes.sectionDesktop}>
            {pageLinks.map((link) => (
              <Typography key={link.name} variant="body1" className={classes.link}>
                <Link to={link.to}>{link.name}</Link>
              </Typography>
            ))}
            <SocialLinks></SocialLinks>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label={mobileMenuId}
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Header;
