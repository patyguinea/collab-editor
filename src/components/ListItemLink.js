import React, { useMemo, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListItemLink({ label, url, icon, isSelected, handleListItemLink }) {
  const CustomLink = useMemo(() => forwardRef((linkProps, ref) => <Link ref={ref} to={url} {...linkProps} />), [url]);

  return (
    <li>
      <ListItem button component={CustomLink} selected={isSelected} onClick={event => handleListItemLink(event, url)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </li>
  );
}
