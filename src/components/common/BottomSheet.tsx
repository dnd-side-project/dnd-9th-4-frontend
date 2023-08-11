/** @jsxImportSource @emotion/react */
import { Drawer } from '@mui/material';
import {
  bottomSheetContentContainer,
  bottomSheetHeadBarStyle,
} from 'components/styles/common/common';
import React from 'react';

const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const paperStyle = {
    fontFamily: 'Pretendard',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    margin: '0 auto',
  };
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      PaperProps={{ style: paperStyle }}
    >
      <div css={bottomSheetHeadBarStyle} />
      <div css={bottomSheetContentContainer}>{children}</div>
    </Drawer>
  );
};

export default BottomSheet;
