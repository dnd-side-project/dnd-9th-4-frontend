/** @jsxImportSource @emotion/react */
import React from 'react';
import { ReactComponent as EmptyList } from 'assets/myPageIcon/img_empty_list.svg';
import UnselectedTag from 'components/common/UnselectedTag';
import { useNavigate } from 'react-router-dom';
import { emptyScheduleStyle } from 'components/styles/myPage';

const EmptySchedule = ({ text }: { text: string }) => {
  const navigate = useNavigate();

  return (
    <div css={emptyScheduleStyle}>
      <EmptyList />
      <div className="text">{text}</div>
      <UnselectedTag
        text="모집글 둘러보기"
        onClick={() => navigate('/matching')}
        isSelected={false}
      />
    </div>
  );
};

export default EmptySchedule;
