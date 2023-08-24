/** @jsxImportSource @emotion/react */
import BottomSheet from 'components/common/BottomSheet';
import DropDown from 'components/common/DropDown';
import Label from 'components/common/Label';
import NextButton from 'components/common/NextButton';
import PrevHeader from 'components/common/PrevHeader';
import TextInputBox from 'components/common/TextInputBox';
import InterestedExercise from 'components/onBoardingPage/InterestedExerciseArea';
import MbtiSection from 'components/onBoardingPage/MbtiSection';
import SelectRectangle from 'components/onBoardingPage/SelectRectangle';
import {
  appContainer,
  bodyContainer,
  verticalLastBlock,
} from 'components/styles/common/common';
import {
  editProfileBodyItemContainer,
  editProfileBottomSheet,
  editProfileHeaderContainer,
  editProfileHeaderInputArea,
  editProfileHeaderTextArea,
} from 'components/styles/myPage';
import {
  healthLabel,
  onBoardingBodyArea,
} from 'components/styles/onBoardingPage';
import { regionData, regionList } from 'data/variable';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserInfo } from './MyPage';

export type EditProfile = {
  img: string;
  name: string;
  userInfo: UserInfo;
  introduce: string;
};

const ProfileEditPage = () => {
  const location = useLocation();
  const editInfo: EditProfile = location.state.editInfo;
  const [nickname, setNickname] = useState(editInfo.name);
  const [introduce, setIntroduce] = useState(editInfo.introduce);
  const [isOpen, setIsOpen] = useState(false);
  const [isExOrMbti, setIsExOrMbti] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>(
    editInfo.userInfo.interested,
  );

  const [selectedRegion, setSelectRegion] = useState(
    editInfo.userInfo.region.first,
  );
  const [selectedSubRegion, setSelectedSubRegion] = useState(
    editInfo.userInfo.region.second,
  );
  const [subRegionValues, setSubRegionValues] = useState<string[]>(
    Object.values(regionData[regionList[editInfo.userInfo.region.first]])[0],
  );

  const [year, setYear] = useState(editInfo.userInfo.career.year);
  const [month, setMonth] = useState(editInfo.userInfo.career.month);

  const defaultMbti = editInfo.userInfo.mbti.split('');
  const [isEorI, setIsEorI] = useState(defaultMbti[0]);
  const [isNorS, setIsNorS] = useState(defaultMbti[1]);
  const [isForT, setIsForT] = useState(defaultMbti[2]);
  const [isPorJ, setIsPorJ] = useState(defaultMbti[3]);

  const onUpdateSelectedTags = (tags: string[]) => {
    setSelectedTags(tags);
    console.log('OnBoardingPage2 : ' + tags);
  };
  const regionKeys = regionData.map((obj) => Object.keys(obj)[0]);

  const handleRegionChange = (region: string) => {
    setSelectRegion(region);
    const targetObject = regionData[regionList[region]];
    setSubRegionValues(targetObject[region]);
    setSelectedSubRegion(targetObject[region][0]);
  };

  const yearItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    (item) => item.toString() + '년',
  );
  const monthItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
    (item) => item.toString() + '개월',
  );

  useEffect(() => {
    console.log(
      `REGION : ${selectedRegion} | SUBREGIONVALUE : ${subRegionValues} | SUB REGION : ${selectedSubRegion}`,
    );
  }, [selectedRegion, subRegionValues, selectedSubRegion]);

  useEffect(() => {
    console.log(year + month);
  }, [year, month]);

  const MbtiContent = () => {
    return (
      <div css={[onBoardingBodyArea, editProfileBottomSheet]}>
        <div>MBTI</div>
        <div css={healthLabel}>
          <Label text="중복선택 가능" />
        </div>
        <MbtiSection
          title="외향형 / 내향형"
          item1="E"
          item2="I"
          onClick={setIsEorI}
          clickedItem={isEorI}
        />
        <MbtiSection
          title="직관형 / 감각형"
          item1="N"
          item2="S"
          onClick={setIsNorS}
          clickedItem={isNorS}
        />
        <MbtiSection
          title="감정형 / 사고형"
          item1="F"
          item2="T"
          onClick={setIsForT}
          clickedItem={isForT}
        />
        <MbtiSection
          title="인식형 / 판단형"
          item1="P"
          item2="J"
          onClick={setIsPorJ}
          clickedItem={isPorJ}
        />
        <NextButton
          text="선택하기"
          isEnabled={
            isEorI !== '' && isNorS !== '' && isForT !== '' && isPorJ !== ''
          }
          onEnabledClick={() => {
            setIsOpen(false);
            editInfo.userInfo.mbti = isEorI + isNorS + isForT + isPorJ;
            // console.log(isEorI + isNorS + isForT + isPorJ);
          }}
        />
      </div>
    );
  };

  const ExerciseContent = () => {
    return (
      <div css={[onBoardingBodyArea, editProfileBottomSheet]}>
        <div>관심 운동</div>
        <div css={healthLabel}>
          <Label text="중복선택 가능" />
        </div>
        <InterestedExercise
          onUpdateSelectedTags={onUpdateSelectedTags}
          defaultTags={selectedTags}
        />
        <NextButton
          text="선택하기"
          isEnabled={selectedTags.length > 0}
          onEnabledClick={() => {
            editInfo.userInfo.interested = selectedTags;
            setIsOpen(false);
          }}
        />
      </div>
    );
  };

  return (
    <>
      <div css={appContainer}>
        <PrevHeader text="프로필 수정" />
        <div css={bodyContainer}>
          <div css={editProfileHeaderContainer}>
            <img src={editInfo.img} style={{ width: '87px', height: '87px' }} />
            <div css={editProfileHeaderTextArea}>
              <div>닉네임</div>
              <div css={editProfileHeaderInputArea}>
                <TextInputBox
                  rows={undefined}
                  placeHolder={'닉네임'}
                  inputValue={nickname}
                  setInputValue={setNickname}
                />
              </div>
            </div>
          </div>
          <div css={editProfileBodyItemContainer}>
            <div className="title">운동 지역</div>
            <div className="content">
              <DropDown
                placeHolder="시/도"
                value={selectedRegion}
                items={regionKeys}
                setValue={handleRegionChange}
              />
              <div style={{ width: '12px' }} />
              <DropDown
                placeHolder="군/구"
                value={selectedSubRegion}
                items={subRegionValues}
                setValue={setSelectedSubRegion}
              />
            </div>
          </div>
          <div css={editProfileBodyItemContainer}>
            <div className="title">관심 운동</div>
            <div className="content">
              <SelectRectangle
                text={editInfo.userInfo.interested.join(', ')}
                onClick={() => {
                  setIsExOrMbti(true);
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
          <div css={editProfileBodyItemContainer}>
            <div className="title">운동 경력</div>
            <div className="content">
              <DropDown
                placeHolder="년"
                value={year}
                items={yearItem}
                setValue={setYear}
              />
              <div style={{ width: '12px' }} />
              <DropDown
                placeHolder="개월"
                value={month}
                items={monthItem}
                setValue={setMonth}
              />
            </div>
          </div>
          <div css={editProfileBodyItemContainer}>
            <div className="title">MBTI</div>
            <div className="content">
              <SelectRectangle
                text={editInfo.userInfo.mbti}
                onClick={() => {
                  setIsExOrMbti(false);
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
          <div css={editProfileBodyItemContainer}>
            <div className="title">소개글</div>
            <div className="content">
              <TextInputBox
                rows={3}
                placeHolder="한 줄 소개를 입력해주세요."
                inputValue={introduce}
                setInputValue={setIntroduce}
              />
            </div>
          </div>
          <div css={verticalLastBlock} />
        </div>
        <NextButton
          text="수정하기"
          isEnabled={true}
          onEnabledClick={() => {}}
        />
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {isExOrMbti === true ? ExerciseContent() : MbtiContent()}
      </BottomSheet>
    </>
  );
};

export default ProfileEditPage;
