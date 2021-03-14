import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  home: {
    textAlign: 'center',
    margin: '1rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      <Typography variant="h4">Collobrative Editing System</Typography>
    </div>
  );
}
