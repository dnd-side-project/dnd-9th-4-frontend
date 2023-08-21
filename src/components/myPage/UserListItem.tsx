/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as Location } from 'assets/icon/icon_location.svg';
import { ReactComponent as Time } from 'assets/icon/icon_career.svg';
import { ReactComponent as Exercise } from 'assets/icon/icon_exercise.svg';
import { userListItemContainer } from 'components/styles/myPage';

export type UserProps = {
  img: string;
  name: string;
  location: string;
  time: string;
  exercise: string;
};

const UserListItem = (user: UserProps) => {
  return (
    <div css={userListItemContainer}>
      <img src={user.img} className="profile_img" />
      <div className="content">
        <div>{user.name}</div>
        <div className="sub_content">
          <div className="info">
            <Location width={17} height={17} />
            <div className="text">{user.location}</div>
          </div>
          <div className="info">
            <Time width={17} height={17} />
            <div className="text">{user.time}</div>
          </div>
          <div className="info">
            <Exercise width={17} height={17} />
            <div className="text">{user.exercise}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
