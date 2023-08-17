/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  NaviBarTitle,
  LableTitle,
  BottomButton,
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

function datailPostWrtiePage() {
  // recoil
  const [postWrite, setPostWrite] = useRecoilState(postWriteState);

  // 작성하기 버튼
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [dayError, setDayError] = useState(false);

  const onClickSubmitButton = () => {
    if (title === '') {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (body === '') {
      setBodyError(true);
    } else {
      setBodyError(false);
    }

    if (day == null) {
      setDayError(true);
    } else {
      setDayError(false);
    }

    if (title !== '' && body !== '' && day != null) {
      console.log('제출하기');
      setPostWrite({
        ...postWrite,
        title: title,
        content: body,
        runtime: moment(day).format('YYYY년 MM월 DD일'),
      });
    }
  };

  console.log(postWrite);

  // 제목
  const [title, setTitle] = useState('');

  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
    setTitleError(false);
  };

  // 상세설명
  const [body, setBody] = useState('');
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

  // 달력
  const [isOpenDay, setIsOpenDay] = useState(false);
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const [runtime, setRuntime] = useState(new Date());
  const [day, setDay] = useState<Date | null>(null);

  const onClickDay = (runtime: Date) => {
    setRuntime(runtime);
  };

  const onClickApply = () => {
    setIsOpenDay(false);
    // const formattedDate = runtime.toLocaleDateString('ko-KR', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    // });
    setDay(runtime);
    setDayError(false);
  };

  const onClickSelectionInit = () => {
    setRuntime(currDate);
    setDay(null);
  };

  // 시간
  const [isOpenTime, setIsOpenTime] = useState(false);

  // 지역
  const [isOpenRegion, setIsOpenRegion] = useState(false);

  return (
    <div>
      <NaviBarTitle title="상세설정" />
      <Horizontalline />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '22px',
          marginRight: '22px',
        })}
      >
        <div>
          <LableTitle title="제목" marginTop="17px" />
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            required
            value={title}
            onChange={handleTitleChange}
            css={[
              matchingDetailWrtieStyles.titleInput,
              { borderColor: titleError ? 'red' : '#D1D3D7' },
            ]}
            // onFocus={(e) => {
            //   e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
            // }}
            // onBlur={(e) => {
            //   e.target.style.borderColor = titleError
            //     ? 'red'
            //     : '#D1D3D7'; /* 기본 색상으로 복원 */
            // }}
          />
        </div>
        <div>
          <LableTitle title="상세설명을 작성해주세요" marginTop="26px" />
          <textarea
            name="body"
            placeholder="파트너 매칭에 올릴 게시글 내용을 작성해주세요."
            required
            value={body}
            onChange={handleBodyChange}
            css={[
              matchingDetailWrtieStyles.bodyInput,
              { borderColor: bodyError ? 'red' : '#D1D3D7' },
            ]}
            // onFocus={(e) => {
            //   e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
            // }}
            // onBlur={(e) => {
            //   e.target.style.borderColor = '#D1D3D7'; /* 기본 색상으로 복원 */
            // }}
          />
          <div css={matchingDetailWrtieStyles.bodyLen}>
            {body.length}/{MAX_CHARACTERS}
          </div>
        </div>
        <div>
          <LableTitle title="운동일시" marginTop="5px" />
          <div css={matchingDetailWrtieStyles.runTimeInput}>
            <input
              type="text"
              name="date"
              //placeholder={moment(currDate).format('YYYY년 MM월 DD일')}
              value={
                day == null
                  ? moment(currDate).format('YYYY년 MM월 DD일')
                  : moment(day).format('YYYY년 MM월 DD일')
              }
              readOnly
              css={css({
                marginRight: '15px',
                color: day == null ? 'gray' : 'black',
                border: dayError ? '0.75px solid red' : '0.75px solid #D1D3D7',
              })}
              onClick={() => setIsOpenDay(true)}
            />
            <input
              type="text"
              name="date"
              value="00시 00분"
              readOnly
              css={css({
                color: postWrite.runtime == null ? 'gray' : 'black',
                border: '0.75px solid #D1D3D7',
              })}
              onClick={() => setIsOpenTime(true)}
            />
          </div>
        </div>
        <div>
          <LableTitle title="지역" marginTop="26px" />
          <input
            type="text"
            name="location"
            placeholder="지역을 입력해주세요."
            required
            css={matchingDetailWrtieStyles.regionInput}
            onClick={() => setIsOpenRegion(true)}
          />
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
          <InitAndApplyButton
            onClickSelectionInit={onClickSelectionInit}
            onClickApply={onClickApply}
          />
        </>
      </BottomSheet>
      <BottomSheet
        isOpen={isOpenTime}
        onClose={() => {
          setIsOpenTime(false);
        }}
      >
        <>
          <div css={matchingDetailWrtieStyles.bottomSheetTitle}>일시</div>
          <InitAndApplyButton
            onClickSelectionInit={() => console.log('초기화')}
            onClickApply={() => console.log('적용')}
          />
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
          <InitAndApplyButton
            onClickSelectionInit={() => console.log('초기화')}
            onClickApply={() => console.log('적용')}
          />
        </>
      </BottomSheet>
    </div>
  );
}

export default datailPostWrtiePage;
