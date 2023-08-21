import React from 'react';
import TextField from '@mui/material/TextField';

const TextInputBox = ({
  defaultVal,
  rows,
  placeHolder,
}: {
  defaultVal: string | undefined;
  rows: number | undefined;
  placeHolder: string | undefined;
}) => {
  const inputBoxStyle = {
    fontSize: '16px',
    fontWeight: 500,
    color: '#000000',
    fontFamily: 'Pretendard',
  };
  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder={placeHolder}
      rows={rows}
      multiline={rows !== undefined ? true : false}
      defaultValue={defaultVal !== undefined ? defaultVal : ''}
      InputProps={{ style: inputBoxStyle }}
    />
  );
};

export default TextInputBox;
