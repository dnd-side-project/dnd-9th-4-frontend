import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

const DropDown = ({
  placeHolder,
  items,
  value,
  setValue,
}: {
  placeHolder: string;
  items: string[];
  value: string;
  setValue: (val: string) => void;
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string);
  };

  const dropDownStyle = {
    flex: 1,
    height: '46px',
    padding: '11px 21px',
    border: 'none',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '150%',
    color: '#202123',
    '& .MuiSelect-select': {
      padding: 0,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #959DB1',
      borderRadius: '5px',
    },
  };

  const menuItemStyle = {
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '150%',
    color: '#959DB1',
  };

  return (
    <Select
      defaultValue=""
      displayEmpty
      value={value || ''}
      onChange={handleChange}
      renderValue={(selected) => {
        if (!selected) {
          return <em>{placeHolder}</em>;
        }
        return selected;
      }}
      sx={dropDownStyle}
    >
      <MenuItem disabled value="" sx={menuItemStyle}>
        <em>{placeHolder}</em>
      </MenuItem>
      {items.map((item, index) => (
        <MenuItem value={item} key={index} sx={menuItemStyle}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
