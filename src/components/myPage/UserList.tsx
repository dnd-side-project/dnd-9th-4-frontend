/** @jsxImportSource @emotion/react */
import React from 'react';
import UserListItem, { UserProps } from './UserListItem';

const UserList = ({ users }: { users: UserProps[] }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserListItem key={index} {...user} />
      ))}
    </div>
  );
};

export default UserList;
