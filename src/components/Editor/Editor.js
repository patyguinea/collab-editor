import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  textField: props => ({
    width: props.width || '100%',
    margin: '.5rem 0',
  }),
}));

export default function Editor({
  placeholder,
  value,
  onChange,
  label,
  variant = 'standard',
  width,
  onKeyUp,
  endAdornment,
  autoFocus = true,
}) {
  const classes = useStyles({ width });
  return (
    <span>
      <TextField
        id={`${variant}-basic`}
        variant={variant}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes.textField}
        autoFocus={autoFocus}
        onKeyUp={onKeyUp}
        InputProps={
          endAdornment
            ? {
                endAdornment,
              }
            : {}
        }
      />
    </span>
  );
}
