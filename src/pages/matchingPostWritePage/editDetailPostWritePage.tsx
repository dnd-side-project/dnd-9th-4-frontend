/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  NaviBarTitle,
  LableTitle,
  BottomButton,
  InputComponents,
  DropDowmSelect,
  TimeInput,
} from 'components/matchingPage/matchingPostWritePageComponents';
//import AddPhoto from 'assets/AddPhoto.svg';
import { useRecoilState } from 'recoil';
import { postWriteState } from 'recoil/postWrite';
import BottomSheet from 'components/common/BottomSheet';
import Calendar from 'react-calendar';
import 'pages/matchingPostWritePage/calendar.css';
import moment from 'moment';
import {
  InitAndApplyButton,
  Horizontalline,
} from 'components/common/commonComponents';
import { matchingDetailWrtieStyles } from 'components/styles/matchingPostWriteStyles';
import 'moment/locale/ko';
import regionJsonData from 'data/region.json';
moment.locale('ko');

const testData = {
  age: '20대 초반',
  content: '취미로 등산하는데 한라산 꼭 가보고 싶었어요!!',
  gender: '여성',
  id: 1,
  memberId: 1,
  region: '대전광역시 유성구',
  runtime: '2023-09-12 09:00:00',
  sport: 'HIKING',
  status: 'COMPLETED',
  tags: ['20대', '30대', '2030', '같이성장해요', '운동초보환영'],
  title: '한라산 올라가실 분~',
  writerAge: '30',
  writerGender: 'MALE',
  writerProfileImg:
    'https://image.hmall.com/static/8/0/42/35/2135420804_0.jpg?RS=600x600&AR=0',
  writerUsername: 'john_doe',
  writtenDate: new Date('2023-08-23T12:04:36.183Z'),
};

// 게시물 수정
function editDatailPostWrtiePage() {
  // recoil
  const [postWrite, setPostWrite] = useRecoilState(postWriteState);

  // 작성하기 버튼
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [dayError, setDayError] = useState(false);
  const [hourError, setHourError] = useState(false);
  const [regionError, setRegionError] = useState(false);

  const checkAndSetError = (
    value: string | null | Date,
    setErrorFunction: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (value == null || value === '') {
      setErrorFunction(true);
    } else {
      setErrorFunction(false);
    }
  };

  const onClickSubmitButton = () => {
    checkAndSetError(title, setTitleError);
    checkAndSetError(body, setBodyError);
    checkAndSetError(day, setDayError);
    checkAndSetError(fullTime, setHourError);
    checkAndSetError(applyBigRegion, setRegionError);

    if (
      title !== '' &&
      body !== '' &&
      day != null &&
      fullTime != null &&
      applyBigRegion != null &&
      applySmalRegion != null
    ) {
      console.log('제출하기');
      setPostWrite({
        ...postWrite,
        title: title,
        content: body,
        runtime: moment(day).format('YYYY년 MM월 DD일') + '' + fullTime,
        region: applyBigRegion + '' + applySmalRegion,
        tags: tagList,
      });
    }
  };

  // [제목]
  const [title, setTitle] = useState(testData.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleError(false);
  };

  // [상세설명]
  const [body, setBody] = useState(testData.content);
  const MAX_CHARACTERS = 300;

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CHARACTERS) {
      setBody(inputValue);
      setBodyError(false);
    } else {
      setBody(inputValue.slice(0, MAX_CHARACTERS - 1));
      setBodyError(true);
    }
  };

  // [일시]
  const [isOpenDay, setIsOpenDay] = useState(false);
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const [runtime, setRuntime] = useState(new Date()); // 달력 선택하는 값
  const [day, setDay] = useState<Date | null>(new Date(testData.runtime)); // 선택된 날짜 값

  const onClickDay = (runtime: Date) => {
    setRuntime(runtime);
  };

  const onClickApply = () => {
    setIsOpenDay(false);
    setDay(runtime);
    setDayError(false);
  };

  // [시간] - 시간
  const dateObject = new Date(testData.runtime);
  const dataHours = String(dateObject.getHours()).padStart(2, '0');
  const DataMinutes = String(dateObject.getMinutes()).padStart(2, '0');

  const formattedTime = `${dataHours}시 ${DataMinutes}분`;

  const [isOpenTime, setIsOpenTime] = useState(false);
  const [hour, setHour] = useState<string>('0');
  const [fullTime, setFullTime] = useState<string | null>(formattedTime);

  const onClickTimeApply = () => {
    setIsOpenTime(false);
    const formattedHour = hour?.padStart(2, '0');
    setFullTime(formattedHour + '시 ' + minute + '분');
    setHourError(false);
  };

  const onClickHour = (value: string) => {
    setHour(value);
  };

  const data = Array.from({ length: 24 }, (_, index) => index);
  const HourData = data.map((number) => number.toString());

  // [시간] - 분
  const [minute, setMinute] = useState<string>('00');

  const onClickMinute = (value: string) => {
    setMinute(value);
  };

  const MinuteData = ['00', '10', '20', '30', '40', '50'];

  // [지역]
  const [isOpenRegion, setIsOpenRegion] = useState(false);
  const [bigRegion, setBigRegion] = useState(testData.region.split(' ')[0]);
  const [smallRegion, setSmallRegion] = useState(testData.region.split(' ')[1]);
  const [applyBigRegion, setApplyBigRegion] = useState<string | null>(
    testData.region.split(' ')[0],
  );
  const [applySmalRegion, setApplySamllRegion] = useState<string | null>(
    testData.region.split(' ')[1],
  );

  const regionBigName = Object.keys(regionJsonData);

  const onClickBigRegion = (value: string) => {
    setBigRegion(value);
    setSmallRegion(regionJsonData[value as keyof typeof regionJsonData][0]);
    setRegionError(false);
  };

  const onClickSmallRegion = (value: string) => {
    setSmallRegion(value);
  };

  const onClickRegionApply = () => {
    setIsOpenRegion(false);
    setApplyBigRegion(bigRegion);
    setApplySamllRegion(smallRegion);
  };

  // [해시태그]
  const hashTagData = [
    '20대',
    '30대',
    '40대',
    '50대',
    '나이무관',
    '운동하는직장인',
    '오직운동만',
    '운동고수',
    '운동자극',
    '운동끝나고치맥',
    '운동초보환영',
    '같이성장해요',
    '서로도와요',
  ];
  const [writeTag, setWriteTag] = useState('');

  const onChamgeWriteTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length > 7) {
      const shortenedValue = inputValue.slice(0, 7);
      setWriteTag(shortenedValue);
    } else {
      setWriteTag(inputValue);
    }
  };

  const onClickTagAdd = () => {
    setWriteTag('');
    if (tagList.includes(writeTag) || writeTag == '') {
      console.log('해시태그에 안들어감');
    } else if (tagList.length < 5) {
      setTagList([...tagList, writeTag]);
    }
  };

  const [tagList, setTagList] = useState<string[]>(testData.tags);

  const onClickHashTag = (tag: string) => {
    if (tagList.includes(tag)) {
      setTagList(tagList.filter((item) => item !== tag));
    } else if (tagList.length < 5) {
      setTagList([...tagList, tag]);
    }
  };

  const onClickRemoveTag = (tag: string) => {
    setTagList(tagList.filter((item) => item !== tag));
  };

  return (
    <div css={matchingDetailWrtieStyles.paddingBottom}>
      <NaviBarTitle title="상세설정" />
      <Horizontalline />
      <div css={matchingDetailWrtieStyles.container}>
        <InputComponents
          label="제목"
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChangeInput={handleTitleChange}
          error={titleError}
          maxLength={null}
        />
        <InputComponents
          label="상세설명을 작성해주세요"
          name="body"
          placeholder="파트너 매칭에 올릴 게시글 내용을 작성해주세요."
          value={body}
          onChangeTextArea={handleBodyChange}
          error={bodyError}
          maxLength={MAX_CHARACTERS}
        />
        <div>
          <LableTitle title="운동일시" marginTop="5px" require={true} />
          <div css={matchingDetailWrtieStyles.runTimeInput}>
            <TimeInput
              name="date"
              value={
                day == null
                  ? moment(currDate).format('YYYY.MM.DD ddd')
                  : moment(day).format('YYYY.MM.DD ddd')
              }
              margin="15px"
              option={day}
              optionError={dayError}
              setIsOpen={() => setIsOpenDay(true)}
            />
            <TimeInput
              name="time"
              value={fullTime == null ? '00시 00분' : fullTime}
              option={fullTime}
              optionError={hourError}
              setIsOpen={() => setIsOpenTime(true)}
            />
          </div>
        </div>
        <div>
          <LableTitle title="지역" marginTop="26px" require={true} />
          <div css={matchingDetailWrtieStyles.runTimeInput}>
            <TimeInput
              name="regionBig"
              value={applyBigRegion != null ? applyBigRegion : '서울특별시'}
              margin="15px"
              option={applyBigRegion}
              optionError={regionError}
              setIsOpen={() => setIsOpenRegion(true)}
            />
            <TimeInput
              name="regionSmall"
              value={applySmalRegion != null ? applySmalRegion : '종로구'}
              option={applySmalRegion}
              optionError={regionError}
              setIsOpen={() => setIsOpenRegion(true)}
            />
          </div>
        </div>
        <div>
          <LableTitle
            title="게시물 태그를 선택해주세요"
            marginTop="26px"
            require={false}
          />
          <div css={matchingDetailWrtieStyles.tagContainer}>
            <input
              type="text"
              name="tag"
              placeholder="태그를 작성해주세요"
              value={writeTag}
              onChange={onChamgeWriteTag}
              css={matchingDetailWrtieStyles.titleInput}
            />
            <span
              css={matchingDetailWrtieStyles.tagPlus}
              onClick={onClickTagAdd}
            >
              +
            </span>
          </div>
          <div css={matchingDetailWrtieStyles.tagExplan}>
            한 개당 최대 8글자로 5개까지 추가가 가능해요
          </div>
          <div
            css={[
              matchingDetailWrtieStyles.tagBox,
              { paddingBottom: tagList.length != 0 ? '16.5px' : '0px' },
            ]}
          >
            {tagList.map((item, index) => (
              <div
                key={index}
                css={matchingDetailWrtieStyles.tagButton}
                onClick={() => onClickRemoveTag(item)}
              >
                #{item}
                <div css={matchingDetailWrtieStyles.tagBlueBox} />
              </div>
            ))}
          </div>
          <div css={matchingDetailWrtieStyles.commendTag}>추천태그</div>
          <div css={matchingDetailWrtieStyles.commendTagList}>
            {hashTagData.map((item, index) => (
              <div
                key={index}
                css={[
                  matchingDetailWrtieStyles.commendTagButton,
                  {
                    border: `1px solid ${
                      tagList.includes(item) ? '#007BFF' : '#959DB1'
                    }`,
                  },
                  { color: tagList.includes(item) ? '#007BFF' : '#959DB1' },
                ]}
                onClick={() => onClickHashTag(item)}
              >
                #{item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomButton
        title="모집글 등록하기"
        onClickButton={onClickSubmitButton}
      />
      <BottomSheet
        isOpen={isOpenDay}
        onClose={() => {
          setIsOpenDay(false);
          setRuntime(day == null ? currDate : day);
        }}
      >
        <>
          <div css={matchingDetailWrtieStyles.bottomSheetTitle}>일시</div>
          <Calendar
            className="react-calendar"
            formatDay={(locale, date) => moment(date).format('DD')}
            tileDisabled={({ date }) =>
              moment(date).format('MM-DD') < currDateTime
            }
            calendarType="gregory"
            onClickDay={onClickDay}
            value={runtime}
          />
          <InitAndApplyButton onClickApply={onClickApply} />
        </>
      </BottomSheet>
      <BottomSheet
        isOpen={isOpenTime}
        onClose={() => {
          setIsOpenTime(false);
        }}
      >
        <>
          <div css={matchingDetailWrtieStyles.bottomSheetTitle}>시간</div>
          <div css={matchingDetailWrtieStyles.flex}>
            <DropDowmSelect
              option={hour}
              optionTitle={`${hour}시`}
              itemList={HourData}
              onClick={onClickHour}
            />
            <DropDowmSelect
              option={minute}
              optionTitle={`${minute}분`}
              itemList={MinuteData}
              onClick={onClickMinute}
            />
          </div>
          <InitAndApplyButton onClickApply={onClickTimeApply} />
        </>
      </BottomSheet>
      <BottomSheet
        isOpen={isOpenRegion}
        onClose={() => {
          setIsOpenRegion(false);
        }}
      >
        <>
          <div css={matchingDetailWrtieStyles.bottomSheetTitle}>지역</div>
          <div css={matchingDetailWrtieStyles.flex}>
            <DropDowmSelect
              option={bigRegion}
              optionTitle={bigRegion}
              itemList={regionBigName}
              onClick={onClickBigRegion}
            />
            <DropDowmSelect
              option={smallRegion}
              optionTitle={smallRegion}
              itemList={
                bigRegion == null
                  ? regionJsonData.서울특별시
                  : regionJsonData[bigRegion as keyof typeof regionJsonData]
              }
              onClick={onClickSmallRegion}
            />
          </div>
          <InitAndApplyButton onClickApply={onClickRegionApply} />
        </>
      </BottomSheet>
    </div>
  );
}

export default editDatailPostWrtiePage;
