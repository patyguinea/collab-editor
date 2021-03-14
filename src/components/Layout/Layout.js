import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Navbar from './NavBar/NavBar';
import { DRAWER_WIDTH } from '../../shared/constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  children: {
    width: '100%',
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    toggleDrawer(!isDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <header>
        <Navbar isDrawerOpen={isDrawerOpen} handleToggleDrawer={handleToggleDrawer} />
      </header>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <div>{children}</div>
      </main>
    </div>
  );
}
