import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';

const nicknameFieldStyle = {
  '& .MuiInputBase-root': {
    width: '168.5px',
  },
  '& .MuiInputBase-input': {
    fontSize: '18px',
    fontWeight: 600,
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Pretendard',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#C8C8C8',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0066FF',
  },
  '& .MuiInputLabel-shrink': {
    color: '#CACFD9',
  },
};

const NicknameField = ({
  onNicknameChange,
}: {
  onNicknameChange: (nickname: string) => void;
}) => {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    onNicknameChange(newNickname);
  };
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      placeholder="닉네임"
      InputLabelProps={{
        shrink: true,
      }}
      sx={nicknameFieldStyle}
      value={nickname}
      onChange={handleNicknameChange}
    />
  );
};

export default NicknameField;
