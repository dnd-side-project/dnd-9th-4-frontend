import React from 'react';
import { ReactComponent as Rate } from 'assets/profilePageIcon/icon_rate_rating.svg';
import { ReactComponent as UnRate } from 'assets/profilePageIcon/icon_rate_unrating.svg';

const RateIcon = ({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) => {
  return <div onClick={onClick}>{isClicked ? <Rate /> : <UnRate />}</div>;
};

export default RateIcon;
