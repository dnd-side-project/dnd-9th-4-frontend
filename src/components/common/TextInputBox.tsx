import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

const TextInputBox = ({
  rows,
  placeHolder,
  inputValue,
  setInputValue,
}: {
  rows: number | undefined;
  placeHolder: string | undefined;
  inputValue: string;
  setInputValue: (input: string) => void;
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
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
      InputProps={{ style: inputBoxStyle }}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default TextInputBox;
