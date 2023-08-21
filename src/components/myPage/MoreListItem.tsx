/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as ArrowRight } from 'assets/icon/icon_arrow_right.svg';
import { moreListItemContainer } from 'components/styles/myPage';

const MoreListItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div css={moreListItemContainer} onClick={onClick}>
      <div>{text}</div>
      <ArrowRight width={24} height={24} />
    </div>
  );
};

export default MoreListItem;
