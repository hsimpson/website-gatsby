import React from 'react';

import { Link } from 'gatsby';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
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
    menuButton: {
      marginRight: theme.spacing(2),
    },

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
      <MenuItem>
        <Typography variant="body1">
          <Link className={classes.linkformobile} to="/">
            Home
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">
          <Link className={classes.linkformobile} to="#">
            Project
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">
          <Link className={classes.linkformobile} to="#">
            Blog
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">
          <Link className={classes.linkformobile} to="#">
            About
          </Link>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap color="inherit" className={classes.link}>
            <Link to="/">Daniel</Link>
          </Typography>

          <div className={classes.grow}></div>

          <div className={classes.sectionDesktop}>
            <Typography variant="body1" className={classes.link}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link to="#">Project</Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link to="#">Blog</Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link to="#">About</Link>
            </Typography>
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
