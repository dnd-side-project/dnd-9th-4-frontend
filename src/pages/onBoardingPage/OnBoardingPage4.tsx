/** @jsxImportSource @emotion/react */
import DropDown from 'components/common/DropDown';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import ProgressBar from 'components/onBoardingPage/ProgressBar';
import Question from 'components/onBoardingPage/Question';
import { appContainer } from 'components/styles/common/common';
import {
  onBoardingBodyArea,
  selectPeriodContainer,
} from 'components/styles/onBoardingPage';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { regionData } from 'data/variable';
import { useRecoilState } from 'recoil';
import { onboardingProfileState } from 'recoil/onboardingProfileState';

const OnBoardingPage4 = () => {
  const navigate = useNavigate();
  const [onboardingProfile, setOnboardingProfile] = useRecoilState(
    onboardingProfileState,
  );
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSubRegion, setSelectedSubRegion] = useState('');
  const [subRegionValues, setSubRegionValues] = useState<string[]>([]);

  const regionKeys = regionData.map((obj) => Object.keys(obj)[0]);

  const handleProfileChange = () => {
    const updatedProfile = {
      ...onboardingProfile,
      region: `${selectedRegion} ${selectedSubRegion}`,
    };
    setOnboardingProfile(updatedProfile);
    // console.log(updatedProfile);
    // console.log(onboardingProfile);
  };

  const handleRegionChange = (region: string) => {
    // console.log(region);
    setSelectedRegion(region);
    const targetObject = regionData[regionKeys.indexOf(region)];
    setSubRegionValues(targetObject[region]);
    setSelectedSubRegion(targetObject[region][0]);
    // console.log(
    //   `REGION : ${selectedRegion} | SUBREGIONVALUE : ${subRegionValues} | SUB REGION : ${selectedSubRegion}`,
    // );
  };
  useEffect(() => {
    console.log(
      `REGION : ${selectedRegion} | SUBREGIONVALUE : ${subRegionValues} | SUB REGION : ${selectedSubRegion}`,
    );
  }, [selectedRegion, subRegionValues, selectedSubRegion]);

  return (
    <>
      <div css={appContainer}>
        <PrevHeader text="" />
        <ProgressBar value={4} />
        <div css={onBoardingBodyArea}>
          <Question
            keyword="주로 운동하는 지역"
            sentence="을 입력해주세요."
            isEssential={true}
          />
          <div css={selectPeriodContainer}>
            <DropDown
              placeHolder="시/도"
              value={selectedRegion}
              items={regionKeys}
              setValue={handleRegionChange}
            />{' '}
            <div style={{ width: '12px' }} />
            <DropDown
              placeHolder="군/구"
              value={selectedSubRegion}
              items={subRegionValues}
              setValue={setSelectedSubRegion}
            />{' '}
          </div>
        </div>
        <NextButton
          text={'다음'}
          isEnabled={true}
          onEnabledClick={() => {
            handleProfileChange();
            navigate('/onboarding/5');
          }}
        />
      </div>
    </>
  );
};

export default OnBoardingPage4;
