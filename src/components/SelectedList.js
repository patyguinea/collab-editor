import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { useLocation } from 'react-router-dom';
import ListItemLink from './ListItemLink';

export default function SelectedList({ list }) {
  const location = useLocation();
  const [selectedUrl, setSelectedLabel] = useState(location.pathname);

  const handleListItemLinkClick = (event, url) => {
    setSelectedLabel(url);
  };

  return (
    <List>
      {list.map(({ label, url, icon }) => (
        <ListItemLink
          key={url}
          label={label}
          url={url}
          icon={icon}
          isSelected={selectedUrl === url}
          handleListItemLink={handleListItemLinkClick}
        />
      ))}
    </List>
  );
}
