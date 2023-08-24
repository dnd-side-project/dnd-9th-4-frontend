/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
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
import { hashTagData } from 'data/postWriteData';
moment.locale('ko');
import { useMutation } from 'react-query';
import { postMatchingPostWrite } from 'api/matchingPostWritePageApi';
import { baseAxios } from 'api/baseAxios';

function datailPostWrtiePage() {
  // API 통신
  baseAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('jwtToken');
    config.headers.Authorization = 'Bearer ' + token;

    return config;
  });

  const { mutate } = useMutation(() => postMatchingPostWrite(postWrite), {
    onSuccess: (data) => {
      console.log('성공', data);
    },
    onError: (error) => console.log('실패', error),
  });

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
    checkAndSetError(postWrite.title, setTitleError);
    checkAndSetError(postWrite.content, setBodyError);
    checkAndSetError(day, setDayError);
    checkAndSetError(fullTime, setHourError);
    checkAndSetError(applyBigRegion, setRegionError);

    if (
      postWrite.title !== '' &&
      postWrite.content !== '' &&
      postWrite.runtime != null &&
      fullTime != null &&
      applyBigRegion != null &&
      applySmalRegion != null
    ) {
      console.log('제출하기');
      mutate();
    }
  };

  // [제목]
  const [title, setTitle] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleError(false);
    setPostWrite({ ...postWrite, title: event.target.value });
  };

  // [상세설명]
  const [body, setBody] = useState('');
  const MAX_CHARACTERS = 300;

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CHARACTERS) {
      setBody(inputValue);
      setPostWrite({ ...postWrite, content: inputValue });
      setBodyError(false);
    } else {
      setBody(inputValue.slice(0, MAX_CHARACTERS - 1));
      setPostWrite({
        ...postWrite,
        content: inputValue.slice(0, MAX_CHARACTERS - 1),
      });
      setBodyError(true);
    }
  };

  // [일시]
  const [isOpenDay, setIsOpenDay] = useState(false);
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const [runtime, setRuntime] = useState(new Date()); // 달력 선택하는 값
  const [day, setDay] = useState<Date | null>(null); // 선택된 날짜 값

  const onClickDay = (runtime: Date) => {
    setRuntime(runtime);
  };

  const onClickApply = () => {
    setIsOpenDay(false);
    setDay(runtime);
    setDayError(false);
    setPostWrite({
      ...postWrite,
      runtime: moment(runtime).format('YYYY년 MM월 DD일'),
    });
  };

  // [시간] - 시간
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [hour, setHour] = useState<string>('0');
  const [fullTime, setFullTime] = useState<string | null>(null);

  const onClickTimeApply = () => {
    setIsOpenTime(false);
    const formattedHour = hour?.padStart(2, '0');
    const time = formattedHour + '시 ' + minute + '분';
    setFullTime(time);
    setHourError(false);
    setPostWrite({
      ...postWrite,
      runtime: postWrite.runtime + ' ' + time,
    });
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
  const [bigRegion, setBigRegion] = useState('서울특별시');
  const [smallRegion, setSmallRegion] = useState('종로구');
  const [applyBigRegion, setApplyBigRegion] = useState<string | null>(null);
  const [applySmalRegion, setApplySamllRegion] = useState<string | null>(null);

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
    setPostWrite({ ...postWrite, region: bigRegion + ' ' + smallRegion });
  };

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

  const onhandleKeyPressTag = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      setWriteTag('');
      if (tagList.includes(writeTag) || writeTag == '') {
        console.log('해시태그에 안들어감');
      } else if (tagList.length < 5) {
        setTagList([...tagList, writeTag]);
        setPostWrite({ ...postWrite, tags: [...tagList, writeTag] });
      }
    }
  };

  const onClickTagAdd = () => {
    setWriteTag('');
    if (tagList.includes(writeTag) || writeTag == '') {
      console.log('해시태그에 안들어감');
    } else if (tagList.length < 5) {
      setTagList([...tagList, writeTag]);
      setPostWrite({ ...postWrite, tags: [...tagList, writeTag] });
    }
  };

  const [tagList, setTagList] = useState<string[]>([]);

  const onClickHashTag = (tag: string) => {
    if (tagList.includes(tag)) {
      setTagList(tagList.filter((item) => item !== tag));
      setPostWrite({
        ...postWrite,
        tags: tagList.filter((item) => item !== tag),
      });
    } else if (tagList.length < 5) {
      setTagList([...tagList, tag]);
      setPostWrite({ ...postWrite, tags: [...tagList, tag] });
    }
  };

  const onClickRemoveTag = (tag: string) => {
    setTagList(tagList.filter((item) => item !== tag));
    setPostWrite({
      ...postWrite,
      tags: tagList.filter((item) => item !== tag),
    });
  };

  return (
    <div
      css={css({
        paddingBottom: '130px',
      })}
    >
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
              onKeyDown={onhandleKeyPressTag}
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
          <div
            css={css({
              display: 'flex',
            })}
          >
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
          <div
            css={css({
              display: 'flex',
            })}
          >
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

export default datailPostWrtiePage;
