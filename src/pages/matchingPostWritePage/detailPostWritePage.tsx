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

function datailPostWrtiePage() {
  // recoil
  const [postWrite, setPostWrite] = useRecoilState(postWriteState);

  // // 이미지
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0]; // 사용자가 파일 선택을 취소하면 files가 null이 될 수 있습니다.
  //   if (selectedFile) {
  //     setSelectedImage(URL.createObjectURL(selectedFile));
  //   }
  // };

  // 제목
  const [title, setTitle] = useState('');

  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  // 상세설명
  const [body, setBody] = useState('');
  const MAX_CHARACTERS = 300;

  const handleBodyChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (body.length < MAX_CHARACTERS) setBody(event.target.value);
  };

  // 운동일시
  const [isOpenDay, setIsOpenDay] = useState(false);

  // 작성하기 버튼
  const onClickSubmitButton = () => {
    console.log('제출하기');
    setPostWrite({ ...postWrite, title: title, content: body });
    console.log(postWrite);
  };

  // 달력
  const currDate = new Date();
  const currDateTime = moment(currDate).format('MM-DD');

  return (
    <div>
      <NaviBarTitle title="상세설정" />
      <div
        css={css({
          height: '1px',
          backgroundColor: '#E2E2E2',
          marginBlock: '10px',
          //marginTop: '20px',
        })}
      />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          //marginTop: '30px',
          marginLeft: '22px',
          marginRight: '22px',
        })}
      >
        {/* <div>
          <label htmlFor="imageInput">
            <div
              css={css({
                width: '64px',
                height: '65px',
                borderRadius: '4px',
                border: '1px solid #D1D3D7',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer', // 클릭 가능한 커서 스타일 설정
              })}
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" />
              ) : (
                <img src={AddPhoto} alt="Add" css={css({ width: '21px' })} />
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div> */}
        <div>
          <LableTitle title="제목" marginTop="17px" />
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            required
            value={title}
            onChange={handleTitleChange}
            css={css({
              borderRadius: '4px',
              width: '100%',
              height: '47px',
              border: '0.75px solid #D1D3D7',
              marginTop: '13px',
              paddingLeft: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease-in-out',
              fontFamily: 'Pretendard',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%', // "24px"
              letterSpacing: '-0.304px',
            })}
            onFocus={(e) => {
              e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
              e.target.style.color = 'black';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1D3D7'; /* 기본 색상으로 복원 */
            }}
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
            css={css({
              borderRadius: '4px',
              width: '100%',
              height: '150px',
              border: '0.75px solid #D1D3D7',
              marginTop: '13px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '12px',
              outline: 'none',
              transition: 'border-color 0.3s ease-in-out',
              fontFamily: 'Pretendard',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%', // "24px"
              letterSpacing: '-0.304px',
            })}
            onFocus={(e) => {
              e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
              //e.target.style.color = 'black';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1D3D7'; /* 기본 색상으로 복원 */
            }}
          />
          <div
            css={css({
              color: '#C0C0C0',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%', // "24px"
              letterSpacing: '-0.8px',
              textAlign: 'right',
              marginRight: '3px',
            })}
          >
            {body.length}/{MAX_CHARACTERS}
          </div>
        </div>
        <div>
          <LableTitle title="운동일시" marginTop="5px" />
          <div
            css={css({
              display: 'flex',
              textAlign: 'end',
              justifyContent: 'center',
              alignItems: 'center',
              '& > input': {
                flex: 1,
                borderRadius: '4px',
                width: '60px',
                height: '47px',
                border: '0.75px solid #D1D3D7',
                marginTop: '13px',
                textAlign: 'center',
                //paddingLeft: '25px',
                outline: 'none',
                //transition: 'border-color 0.3s ease-in-out',
                color: 'gray',
                fontFamily: 'Pretendard',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '150%', // "24px"
                letterSpacing: '-0.8px',
              },
            })}
          >
            <input
              type="text"
              name="date"
              value="2023.08.05(sat)"
              readOnly
              css={css({
                marginRight: '15px',
              })}
              onClick={() => setIsOpenDay(true)}
            />
            <input
              type="text"
              name="date"
              value="00시 00분"
              readOnly
              onFocus={(e) => {
                e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#D1D3D7'; /* 기본 색상으로 복원 */
              }}
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
            css={css({
              borderRadius: '4px',
              width: '100%',
              height: '47px',
              border: '0.75px solid #D1D3D7',
              marginTop: '13px',
              paddingLeft: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease-in-out',
              color: '#CACFD9',
              fontFamily: 'Pretendard',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%', // "24px"
              letterSpacing: '-0.304px',
            })}
            onFocus={(e) => {
              e.target.style.borderColor = '#06F'; /* 파란색 테두리로 변경 */
              e.target.style.color = 'black';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1D3D7'; /* 기본 색상으로 복원 */
            }}
          />
        </div>
      </div>
      <BottomButton
        title="모집글 등록하기"
        onClickButton={onClickSubmitButton}
      />
      <BottomSheet isOpen={isOpenDay} onClose={() => setIsOpenDay(false)}>
        <>
          <div
            css={css({
              color: '#000',
              fontFamily: 'Pretendard',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '-0.304px',
              marginBottom: '20px',
            })}
          >
            일시
          </div>
          <Calendar
            className="react-calendar"
            formatDay={(locale, date) => moment(date).format('DD')}
            tileDisabled={({ date }) =>
              moment(date).format('MM-DD') < currDateTime
            }
            calendarType="US"
          />
        </>
      </BottomSheet>
    </div>
  );
}

export default datailPostWrtiePage;
