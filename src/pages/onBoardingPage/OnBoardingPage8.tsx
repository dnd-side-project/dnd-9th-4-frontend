/** @jsxImportSource @emotion/react */
import HorizontalDivider from 'components/common/HorizontalDivider';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { ReactComponent as Check } from 'assets/icon/icon_check.svg';
import { ReactComponent as Info } from 'assets/icon/icon_info.svg';
import {
  appContainer,
  checkCircle,
  stackRow,
} from 'components/styles/common/common';
import {
  infoContainer,
  infoIconArea,
  infoTextArea,
  locationAgree,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postOnboardingProfile } from 'api/onboardingPageApi';
import { useRecoilValue } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';
import { baseAxios } from 'api/baseAxios';
const OnBoardingPage8 = () => {
  const onboardingProfile = useRecoilValue(onboardingProfileState);

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(
    () => postOnboardingProfile(onboardingProfile),
    {
      onSuccess: (data) => {
        console.log(onboardingProfile.username + ':성공' + data);
      },
      onError: (error) => console.log(error),
    },
  );
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <ProgressBar value={8} />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="뉴플의 위치정보 활용"
          sentence={'에\n동의해주세요.'}
          isEssential={false}
        />
        <HorizontalDivider h={2} marginSize={'28px 0 24px 0'} />
        <div css={stackRow}>
          <div css={locationAgree}>
            {'위치기반 서비스 이용을 위해 위치정보\n이용약관에 동의합니다.'}
          </div>
          <div
            css={checkCircle({ size: 25, isChecked: isClicked })}
            onClick={() => setIsClicked(!isClicked)}
          >
            <Check />
          </div>
        </div>
        <div css={[stackRow, infoContainer]}>
          <div css={infoIconArea}>
            <Info />
          </div>
          <div css={infoTextArea}>
            {
              '뉴플을 이용하려면 위치정보 활용에 동의가 필요합니다.\n동의하지 않으면 뉴플을 이용할 수 없습니다.'
            }
          </div>
        </div>
      </div>
      <NextButton
        text={'다음'}
        isEnabled={isClicked}
        onEnabledClick={() => {
          mutate();
          navigate('/onboarding/finish');
        }}
      />
    </div>
  );
};

export default OnBoardingPage8;
