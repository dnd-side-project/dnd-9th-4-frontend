/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Region } from 'assets/icon/icon_location.svg';
import { ReactComponent as Interested } from 'assets/icon/icon_exercise.svg';
import { ReactComponent as Career } from 'assets/icon/icon_career.svg';
import { ReactComponent as Person } from 'assets/icon/icon_person.svg';
import {
  userInfoBoxContainer,
  userInfoBoxItem,
} from 'components/styles/myPage';
import { UserInfo } from 'data/type';

const UserInfoBox = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <div css={userInfoBoxContainer}>
      <div css={userInfoBoxItem}>
        <div className="left">
          <Region width={20} height={20} />
          <div className="text">지역</div>
        </div>
        <div className="right">{`${userInfo.region.first} ${userInfo.region.second}`}</div>
      </div>
      <div css={userInfoBoxItem}>
        <div className="left">
          <Interested width={20} height={20} />
          <div className="text">관심 운동</div>
        </div>
        <div className="right">{userInfo.sports.join(', ')}</div>
      </div>
      <div css={userInfoBoxItem}>
        <div className="left">
          <Career width={20} height={20} />
          <div className="text">운동 경력</div>
        </div>
        <div className="right">{`${
          userInfo.career.year !== null ? userInfo.career.year : ''
        } ${userInfo.career.month !== null ? userInfo.career.month : ''}`}</div>
      </div>
      <div css={userInfoBoxItem}>
        <div className="left">
          <Person width={20} height={20} />
          <div className="text">MBTI</div>
        </div>
        <div className="right">{userInfo.mbti}</div>
      </div>
    </div>
  );
};

export default UserInfoBox;
