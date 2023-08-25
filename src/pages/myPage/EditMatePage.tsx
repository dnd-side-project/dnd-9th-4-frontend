/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import { onBoardingBodyArea } from 'components/styles/onBoardingPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mate, OnboardingProfile, Profile } from 'data/type';
import { ProfileToOnboardingProfile } from 'data/typeConverter';
import { baseAxios } from 'api/baseAxios';
import { useMutation } from 'react-query';
import { editProfile } from 'api/myPageApi';
import SelectMateContent from 'components/onBoardingPage/SelectMateContent';

const EditMatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('LOCATION : ', location);
  const userProfile: Profile = location.state.userProfile;
  const profile: OnboardingProfile = ProfileToOnboardingProfile(userProfile);
  const [mateInfo, setMateInfo] = useState<Mate>({
    age: profile.wantedAge,
    gender: profile.wantedGender,
    character: profile.wantedPersonality,
    career: profile.wantedPeriodEx,
  });

  const isNextEnabled =
    mateInfo.gender !== '' &&
    mateInfo.age !== '' &&
    mateInfo.character !== '' &&
    mateInfo.career !== '';

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
    profile.wantedAge = mateInfo.age;
    profile.wantedGender = mateInfo.gender;
    profile.wantedPersonality = mateInfo.character;
    profile.wantedPeriodEx = mateInfo.career;

    mutate();
  };

  return (
    <div css={appContainer}>
      <PrevHeader text="" />
      <div css={onBoardingBodyArea}>
        <Question
          keyword="선호하는 운동메이트"
          sentence={'를\n선택해주세요.'}
          isEssential={false}
        />
        <SelectMateContent
          onUpdateMateInfo={setMateInfo}
          defaultMateInfo={mateInfo}
        />
      </div>
      <NextButton
        text={'수정하기'}
        isEnabled={isNextEnabled}
        onEnabledClick={() => {
          handleEditProfile();
          navigate(-1);
        }}
      />
    </div>
  );
};

export default EditMatePage;
