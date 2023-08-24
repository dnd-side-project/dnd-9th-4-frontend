/** @jsxImportSource @emotion/react */
import { Tab, Tabs } from '@mui/material';
import {
  matchingRecordContentArea,
  matchingRecordContentContainer,
} from 'components/styles/myPage';
import React, { SyntheticEvent, useState } from 'react';

interface TabBarProps {
  tabs: Array<{
    label: string;
    children: React.ReactNode;
  }>;
}

const MatchingRecordContent: React.FC<TabBarProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = {
    fontFamily: 'Pretendard',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '150%',
    padding: '15px',
    color: '#757575',
    '& .Mui-selected': {
      color: '#0074FF',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#FFFFFF',
    },
  };

  return (
    <div css={matchingRecordContentContainer}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{ borderBottom: 1, borderColor: '#067DFC' }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} sx={tabStyle} />
        ))}
      </Tabs>
      <div css={matchingRecordContentArea}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="content"
            style={{ display: value === index ? 'flex' : 'none' }}
          >
            {value === index && tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingRecordContent;
