/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { ReactComponent as Check } from 'assets/icon/icon_check.svg';
import {
  checkNicknameContainer,
  checkNicknameIcon,
} from 'components/styles/onBoardingPage';

const CheckNickname = ({ nickname }: { nickname: string }) => {
  const [isCompleteNickname, setIsCompleteNickname] = useState(false);

  const handleNicknameComplete = () => {
    if (nickname !== '' && nickname !== '뉴플') {
      setIsCompleteNickname(true);
    } else {
      setIsCompleteNickname(false);
    }
  };

  useEffect(() => {
    handleNicknameComplete();
  }, [nickname]);

  return (
    <div css={checkNicknameContainer(isCompleteNickname)}>
      <div css={checkNicknameIcon}>
        <Check width={14.87} height={14.87} />
      </div>
      <div>사용하실 수 있는 닉네임이에요.</div>
    </div>
  );
};

export default CheckNickname;
