/** @jsxImportSource @emotion/react */
import { appContainer, stackRow } from 'components/styles/common/common';
import {
  moreListArea,
  myPageContainer,
  myPageDivider,
  myPageProfileContainer,
  myPageProfileTextArea,
} from 'components/styles/myPage';
import { ReactComponent as ArrowRight } from 'assets/icon/icon_arrow_right.svg';
import React, { ReactNode, useEffect, useState } from 'react';
import { ButtonNavigation } from 'components/common/commonComponents';
import MoreListItem from 'components/myPage/MoreListItem';
import { Modal } from '@mui/material';
import LogoutModalArea from 'components/myPage/LogoutModalArea';
import { useNavigate } from 'react-router-dom';
import { Profile } from 'data/type';
import { baseAxios } from 'api/baseAxios';
import { defaultProfile } from 'data/defaultValue';
import { useMutation } from 'react-query';
import { getProfile } from 'api/myPageApi';
import { imageList } from 'data/variable';
import { getMemberId } from 'api/localStorage';

export const Bar = React.forwardRef<HTMLSpanElement, { children: ReactNode }>(
  (props, ref) => (
    <span {...props} ref={ref}>
      {props.children}
    </span>
  ),
);

const MyPage = () => {
  const memberId = Number(getMemberId());
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<Profile>({
    ...defaultProfile,
  });

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => getProfile(memberId), {
    onSuccess: (data: Profile) => {
      setUserProfile(data);
      console.log('GET PROFILE SUCCESS : ', userProfile);
    },
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    mutate();
  }, []);

  const onProfileClick = () => {
    navigate('/my/profile', { state: { userProfile } });
  };

  const onMyUploadClick = () => {
    navigate('/my/upload', { state: { profileImg: userProfile.profileImg } });
  };

  const onMatchingRecordClick = () => {
    navigate('/my/record');
  };

  const onWithDrawClick = () => {
    navigate('/my/withdraw');
  };

  return (
    <div css={appContainer}>
      <div css={myPageContainer}>
        <div css={myPageProfileContainer} onClick={() => onProfileClick()}>
          <div css={stackRow}>
            <img
              src={imageList[Number(userProfile.profileImg)]}
              style={{ width: '79px', height: '79px' }}
            />
            <div css={myPageProfileTextArea}>{userProfile.username}</div>
          </div>
          <ArrowRight width={24} height={24} />
        </div>
        <div css={myPageDivider} />
        <div css={moreListArea}>
          <MoreListItem
            text="내가 작성한 글"
            onClick={() => {
              onMyUploadClick();
            }}
          />
          <MoreListItem
            text="매칭 일정"
            onClick={() => {
              onMatchingRecordClick();
            }}
          />
          <MoreListItem
            text="로그아웃"
            onClick={() => {
              setIsLogoutOpen(true);
            }}
          />
          <MoreListItem
            text="회원탈퇴"
            onClick={() => {
              onWithDrawClick();
            }}
          />
        </div>
      </div>
      <Modal
        open={isLogoutOpen}
        onClose={() => {
          setIsLogoutOpen(false);
        }}
      >
        <Bar>
          <LogoutModalArea
            clickClose={() => {
              setIsLogoutOpen(false);
            }}
          />
        </Bar>
      </Modal>
      <ButtonNavigation />
    </div>
  );
};

export default MyPage;
