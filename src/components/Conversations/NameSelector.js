import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  nameContainer: {
    textAlign: 'center',
    margin: '1rem',
  },
  button: {
    margin: '1rem',
  },
}));

export default function NameSelector({ handleNameChange }) {
  const classes = useStyles();
  return (
    <div className={classes.nameContainer}>
      <Typography variant="h5">Do you want to be Alice or Bob?</Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleNameChange('Alice')}>
        Alice
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleNameChange('Bob')}>
        Bob
      </Button>
    </div>
  );
}
