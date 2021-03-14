import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  favorites: {
    textAlign: 'right',
    marginRight: '1rem',
  },
}));

export default function ConversationsHeader({ viewFavorites, handleViewFavorites }) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Conversations
      </Typography>
      <div className={classes.favorites}>
        <Button variant="contained" color="primary" onClick={handleViewFavorites}>
          {viewFavorites ? 'View All' : 'View Favorites'}
        </Button>
      </div>
    </div>
  );
}
