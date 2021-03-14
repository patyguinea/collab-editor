import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import HomeIcon from '@material-ui/icons/Home';
import { DRAWER_WIDTH } from '../../../shared/constants';
import SelectedList from '../../SelectedList';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 2000,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const NAV_ITEMS = [
  {
    label: 'Home',
    url: '/home',
    icon: <HomeIcon />,
  },
  {
    label: 'Conversations',
    url: '/conversations',
    icon: <SubtitlesIcon />,
  },
];

export default function Navbar({ isDrawerOpen, handleToggleDrawer }) {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="drawer" onClick={handleToggleDrawer} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Collaborative Editing System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <Divider />
        <SelectedList list={NAV_ITEMS} />
        <Divider />
      </Drawer>
    </div>
  );
}
