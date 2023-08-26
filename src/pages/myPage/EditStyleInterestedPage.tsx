/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import Question from 'components/onBoardingPage/Question';
import SelectStyleContent from 'components/onBoardingPage/SelectStyleContent';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { OnboardingProfile, Profile } from 'data/type';
import { ProfileToOnboardingProfile } from 'data/typeConverter';
import { baseAxios } from 'api/baseAxios';
import { useMutation } from 'react-query';
import { editProfile } from 'api/myPageApi';

const EditStyleInterestedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('LOCATION : ', location);
  const userProfile: Profile = location.state.userProfile;
  const profile: OnboardingProfile = ProfileToOnboardingProfile(userProfile);
  const [selectedStyle, setSelectedStyle] = useState<string[]>(
    profile.exerciseStyles,
  );
  const [selectedInterested, setSelectedInterested] = useState<string[]>(
    profile.interests,
  );

  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => editProfile(profile), {
    onSuccess: (data) => {
      console.log('EDIT PROFILE SUCCESS : ', data);
      navigate(-1);
    },
    onError: (error) => console.log(error),
  });

  const handleEditProfile = () => {
    profile.exerciseStyles = selectedStyle;
    profile.interests = selectedInterested;

    mutate();
  };

  const onUpdateSelectedStyles = (styles: string[]) => {
    setSelectedStyle(styles);
    console.log('Selected Styles : ' + styles);
  };
  const onUpdateSelectedInterested = (interested: string[]) => {
    setSelectedInterested(interested);
    console.log('Selected Interested : ' + interested);
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="나의 운동스타일과 관심사"
          sentence={'를\n선택해주세요.'}
          isEssential={false}
        />
        <SelectStyleContent
          defaultInterested={selectedInterested}
          defaultStyle={selectedStyle}
          onUpdateSelectedStyles={onUpdateSelectedStyles}
          onUpdateSelectedInterested={onUpdateSelectedInterested}
        />
      </div>
      <NextButton
        text={'수정하기'}
        isEnabled={selectedStyle.length > 0 && selectedInterested.length > 0}
        onEnabledClick={() => {
          handleEditProfile();
          navigate(-1);
        }}
      />
    </div>
  );
};

export default EditStyleInterestedPage;
