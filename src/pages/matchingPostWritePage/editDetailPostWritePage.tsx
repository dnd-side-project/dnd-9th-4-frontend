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
import { useRecoilState } from 'recoil';
import { postEditState } from 'recoil/postEdit';
import { MatchingModal } from 'components/matchingPage/matchingPostPageComponents';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { putMatchingPostEdit } from 'api/matchingPostWritePageApi';

// const testData = {
//   age: '20대 초반',
//   content: '취미로 등산하는데 한라산 꼭 가보고 싶었어요!!',
//   gender: '여성',
//   id: 1,
//   memberId: 1,
//   region: '대전광역시 유성구',
//   runtime: '2023-09-12 09:00:00',
//   sport: 'HIKING',
//   status: 'COMPLETED',
//   tags: ['20대', '30대', '2030', '같이성장해요', '운동초보환영'],
//   title: '한라산 올라가실 분~',
//   writerAge: '30',
//   writerGender: 'MALE',
//   writerProfileImg:
//     'https://image.hmall.com/static/8/0/42/35/2135420804_0.jpg?RS=600x600&AR=0',
//   writerUsername: 'john_doe',
//   writtenDate: new Date('2023-08-23T12:04:36.183Z'),
// };

// 게시물 수정

function editDatailPostWrtiePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // API 통신
  const { mutate } = useMutation(() => putMatchingPostEdit(editPost, id), {
    onSuccess: (data) => {
      console.log('성공:', data);
      navigate(`/post/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // 수정
  const [openWritePostModal, setOpenWritePostModal] = useState(false);

  const onClickSubmitButton = () => {
    setOpenWritePostModal(true);
  };

  const onClickWritePostModal = async () => {
    setOpenWritePostModal(false);
    mutate();
  };

  // 수정할 게시물 내용
  const [editPost, setEditPost] = useRecoilState(postEditState);

  // 제목
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditPost({ ...editPost, title: event.target.value });
  };

  // 내용
  const MAX_CHARACTERS = 300;
  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CHARACTERS) {
      setEditPost({ ...editPost, content: inputValue });
    } else {
      setEditPost({
        ...editPost,
        content: inputValue.slice(0, MAX_CHARACTERS - 1),
      });
    }
  };

  // 일시 - 2023-09-12 13:00:00
  const [isOpenDay, setIsOpenDay] = useState(false);
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');
  const dateString = editPost.runtime ?? new Date(); // 작성된 날짜 Date
  const [runtime, setRuntime] = useState(new Date(dateString));

  const onClickDay = (runtime: Date) => {
    setRuntime(runtime);
  };

  const onClickApply = () => {
    const YYMMDD =
      moment(runtime).format('YYYY-MM-DD') +
      ' ' +
      editPost.runtime?.split(' ')[1];
    setIsOpenDay(false);
    setEditPost({
      ...editPost,
      runtime: YYMMDD,
    });
  };

  // 시간
  const [isOpenTime, setIsOpenTime] = useState(false);
  const parts = editPost.runtime
    ? editPost.runtime.split(' ')[1].split(':')
    : '';

  const [hour, setHour] = useState(parts[0]);
  const [minute, setMinute] = useState(parts[1]);

  const onClickHour = (value: string) => {
    setHour(value);
  };

  const onClickMinute = (value: string) => {
    setMinute(value);
  };

  const onClickTimeApply = () => {
    setIsOpenTime(false);
    const HHMMSS =
      editPost.runtime?.split(' ')[0] + ' ' + hour + ':' + minute + ':00';
    setEditPost({
      ...editPost,
      runtime: HHMMSS,
    });
  };

  const data = Array.from({ length: 24 }, (_, index) => index);
  const HourData = data.map((number) => number.toString());
  const MinuteData = ['00', '10', '20', '30', '40', '50'];

  // 지역
  const [isOpenRegion, setIsOpenRegion] = useState(false);
  const [bigRegion, setBigRegion] = useState(editPost.region?.split(' ')[0]);
  const [smallRegion, setSmallRegion] = useState(
    editPost.region?.split(' ')[1],
  );

  const regionBigName = Object.keys(regionJsonData);

  const onClickBigRegion = (value: string) => {
    setBigRegion(value);
    setSmallRegion(regionJsonData[value as keyof typeof regionJsonData][0]);
  };

  const onClickSmallRegion = (value: string) => {
    setSmallRegion(value);
  };

  const onClickRegionApply = () => {
    setIsOpenRegion(false);
    setEditPost({
      ...editPost,
      region: bigRegion + ' ' + smallRegion,
    });
  };

  // 태그
  const [writeTag, setWriteTag] = useState('');
  const [tagList, setTagList] = useState<string[]>(editPost.tags ?? []);

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
      if (
        editPost.tags != undefined
          ? editPost.tags.includes(writeTag) || writeTag == ''
          : []
      ) {
        setWriteTag('');
      } else if (editPost.tags != undefined ? editPost.tags.length < 5 : []) {
        // 해시 태그 넣음
        setTagList([...tagList, writeTag]);
        setEditPost({
          ...editPost,
          tags: [...tagList, writeTag],
        });
      }
    }
  };

  const onClickTagAdd = () => {
    setWriteTag('');
    if (tagList.includes(writeTag) || writeTag == '') {
      console.log('해시태그에 안들어감');
    } else if (tagList.length < 5) {
      setTagList([...tagList, writeTag]);
      setEditPost({
        ...editPost,
        tags: [...tagList, writeTag],
      });
    }
  };

  const onClickHashTag = (tag: string) => {
    if (tagList.includes(tag)) {
      setTagList(tagList.filter((item) => item !== tag));
      setEditPost({
        ...editPost,
        tags: tagList.filter((item) => item !== tag),
      });
    } else if (tagList.length < 5) {
      setTagList([...tagList, tag]);
      setEditPost({ ...editPost, tags: [...tagList, tag] });
    }
  };

  const onClickRemoveTag = (tag: string) => {
    setTagList(tagList.filter((item) => item !== tag));
    setEditPost({
      ...editPost,
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
          value={editPost.title ?? ''}
          onChangeInput={handleTitleChange}
          maxLength={null}
        />
        <InputComponents
          label="상세설명을 작성해주세요"
          name="body"
          placeholder="파트너 매칭에 올릴 게시글 내용을 작성해주세요."
          value={editPost.content ?? ''}
          onChangeTextArea={handleBodyChange}
          maxLength={MAX_CHARACTERS}
        />
        <div>
          <LableTitle title="운동일시" marginTop="5px" require={true} />
          <div css={matchingDetailWrtieStyles.runTimeInput}>
            <TimeInput
              name="date"
              value={moment(runtime).format('YYYY-MM-DD')}
              option={editPost.runtime ? editPost.runtime.split(' ')[0] : ''}
              margin="15px"
              setIsOpen={() => setIsOpenDay(true)}
            />
            <TimeInput
              name="time"
              value={editPost.runtime ? editPost.runtime.split(' ')[1] : ''}
              option={editPost.runtime ? editPost.runtime.split(' ')[1] : ''}
              setIsOpen={() => setIsOpenTime(true)}
            />
          </div>
        </div>
        <div>
          <LableTitle title="지역" marginTop="26px" require={true} />
          <div css={matchingDetailWrtieStyles.runTimeInput}>
            <TimeInput
              name="regionBig"
              value={bigRegion ?? ''}
              margin="15px"
              option={bigRegion}
              setIsOpen={() => setIsOpenRegion(true)}
            />
            <TimeInput
              name="regionSmall"
              value={smallRegion ?? ''}
              option={smallRegion}
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
        title="모집글 수정하기"
        onClickButton={onClickSubmitButton}
      />
      <BottomSheet
        isOpen={isOpenDay}
        onClose={() => {
          setIsOpenDay(false);
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
              option={bigRegion ?? ''}
              optionTitle={bigRegion ?? ''}
              itemList={regionBigName}
              onClick={onClickBigRegion}
            />
            <DropDowmSelect
              option={smallRegion ?? ''}
              optionTitle={smallRegion ?? ''}
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
      <MatchingModal
        open={openWritePostModal}
        onClickModalOk={onClickWritePostModal}
        title="게시물이 수정되었습니다."
        subTitle="뉴플메이트를 만나봐요."
        buttonOne="buttonOne"
      />
    </div>
  );
}

export default editDatailPostWrtiePage;
