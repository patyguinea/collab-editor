import React, { useState, useCallback } from 'react';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Editor from '../Editor/Editor';
import api from '../../shared/api';
import { getDiff } from '../../shared/utils';
import useOutsideClick from '../../hooks/outsideClick';

const useStyles = makeStyles(() => ({
  conversation: {
    margin: '1rem 0',
  },
  text: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
}));

const getOrigin = currentAuthor => {
  const isCurrentAuthorAlice = currentAuthor === 'Alice';
  return isCurrentAuthorAlice
    ? {
        alice: 1,
        bob: 0,
      }
    : { alice: 0, bob: 1 };
};

export default function Conversation({ id, text, author, currentAuthor }) {
  const [isEditing, toggleEditing] = useState(false);
  const [editorText, setEditorText] = useState(text);
  const classes = useStyles();
  const handleOnClick = () => {
    toggleEditing(!isEditing);
  };

  const handleEditorOnChange = e => {
    setEditorText(e.target.value);
  };

  const addMutation = useCallback(() => {
    const { diff, index, length, type } = getDiff(text, editorText);
    if (!diff.length && !index) return;

    const body = {
      author: currentAuthor,
      conversationId: id,
      data: {
        index,
        length,
        text: !diff.length ? undefined : diff.map(each => each.value).join(''),
        type,
      },
      origin: getOrigin(currentAuthor),
    };
    api('ces', 'mutations', 'POST', body).then(result => {
      setEditorText(result.text);
    });
  }, [text, editorText, currentAuthor, id]);

  const handleKeyUp = e => {
    if (e.code !== 'Enter') return;
    toggleEditing(!isEditing);
    addMutation();
  };

  const setOutsideClickCallback = useCallback(() => {
    toggleEditing(false);
    addMutation();
  }, [addMutation]);

  const newItemRef = useOutsideClick(setOutsideClickCallback);

  const handleEdit = () => {
    toggleEditing(!isEditing);
  };

  return (
    <div ref={newItemRef} className={classes.conversation}>
      <Typography variant="h5">{author}</Typography>
      {isEditing ? (
        <Editor value={editorText} onChange={handleEditorOnChange} onKeyUp={handleKeyUp} />
      ) : (
        <div onClick={handleOnClick} className={classes.text}>
          <Typography>{editorText}</Typography>
          <Tooltip title="Edit">
            <IconButton aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
