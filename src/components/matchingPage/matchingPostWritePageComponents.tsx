/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackIos from 'assets/BackIos.svg';
import { useNavigate } from 'react-router-dom';
import { matchingDetailWrtieStyles } from 'components/styles/matchingPostWriteStyles';

interface NaviBarTitleData {
  title: string;
}

/*
    [상단 네비게이션(뒤로 가기) 타이틀]
*/
export function NaviBarTitle(props: NaviBarTitleData) {
  const navigate = useNavigate();
  const onClickBackIcon = () => {
    console.log('뒤로가기');
    navigate(-1);
    window.scrollTo(0, 0);
  };
  return (
    <div
      css={css({
        display: 'flex',
        height: '56px',
        marginTop: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '12px',
        marginLeft: '12px',
      })}
    >
      <img src={BackIos} onClick={onClickBackIcon} />
      <span
        css={css({
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '150%',
          letterSpacing: '-0.342px',
          flex: '1',
        })}
      >
        {props.title}
      </span>
      <div css={css({ width: '25px' })} />
    </div>
  );
}

interface SportData {
  id: number;
  sport: string;
  img: string;
}

interface SelectSportListData {
  sportListData: {
    sportList: SportData[];
  };
  selectSport: string | null;
  onClickSport: (sport: string) => void;
}

/*
    [운동 종목 선택]
*/
export function SelectSportList(props: SelectSportListData) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '25px',
        marginLeft: '16px',
        marginRight: '16px',
      })}
    >
      {props.sportListData.sportList.map((sport) => (
        <div
          key={sport.id}
          css={css({
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            paddingLeft: '20px',
            height: '80px',
            backgroundColor:
              props.selectSport === sport.sport ? '#ECF6FE' : 'transparent',
            borderRadius: '8px',
          })}
          onClick={() => props.onClickSport(sport.sport)}
        >
          <div
            css={css({
              width: '58px',
              //height: '57px',
              //borderRadius: '50%',
              overflow: 'hidden',
            })}
          >
            <img
              src={sport.img}
              alt={sport.sport}
              css={css({ width: '100%', height: '100%', objectFit: 'cover' })}
            />
          </div>
          <div css={css({ marginLeft: '27px' })}>
            <span
              css={css({
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '150%',
                letterSpacing: '-0.342px',
              })}
            >
              {sport.sport}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

interface LableTitleData {
  title: string;
  marginTop: string;
  require: boolean;
}

/*
   [입력 폼 레이블]
*/
export function LableTitle(props: LableTitleData) {
  return (
    <div
      css={css({
        color: '#000',
        fontFamily: 'Pretendard',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '150%',
        letterSpacing: '-0.304px',
        marginTop: props.marginTop,
      })}
    >
      {props.title}
      {props.require ? (
        <span
          css={css({
            color: '#0074FF',
            fontFamily: 'Pretendard',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%',
            letterSpacing: '-0.304px',
          })}
        >
          {' '}
          *
        </span>
      ) : (
        ' (선택)'
      )}
    </div>
  );
}

interface InputData {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  maxLength?: number | null;
}

/*
  [제목, 내용 input]
*/
export function InputComponents(props: InputData) {
  return (
    <div>
      <LableTitle
        title={props.label}
        marginTop={props.label === '제목' ? '17px' : '26px'}
        require={true}
      />
      {props.label === '제목' ? (
        <input
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChangeInput}
          css={[
            matchingDetailWrtieStyles.titleInput,
            { borderColor: props.error ? 'red' : '#D1D3D7' },
            { fontWeight: props.value.length > 0 ? '500' : '400' },
          ]}
        />
      ) : (
        <div>
          <textarea
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChangeTextArea}
            css={[
              matchingDetailWrtieStyles.bodyInput,
              { borderColor: props.error ? 'red' : '#D1D3D7' },
              { fontWeight: props.value.length > 0 ? '500' : '400' },
            ]}
          />
          <div css={matchingDetailWrtieStyles.bodyLen}>
            <span
              css={css({
                color: props.value.length > 0 ? '#3385FF' : '#C0C0C0',
                fontWeight: props.value.length > 0 ? '500' : '400',
              })}
            >
              {props.value.length}
            </span>
            /{props.maxLength}
          </div>
        </div>
      )}
    </div>
  );
}

interface BottomButtonData {
  title: string;
  onClickButton: () => void;
}

/*
   [하단 버튼]
*/
export function BottomButton(props: BottomButtonData) {
  return (
    <div
      css={css({
        width: '100%',
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
      })}
    >
      <div
        css={css({
          margin: '17px 15px',
          textAlign: 'center',
          display: 'flex',
          height: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '6px',
          background: '#06F',
          cursor: 'pointer',
          boxShadow: '5px 5px 15px #CCCCCC, -5px -5px 15px #CCCCCC',
        })}
        onClick={props.onClickButton}
      >
        <span
          css={css({
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Pretendard',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '150%',
            letterSpacing: '-0.342px',
          })}
        >
          {props.title}
        </span>
      </div>
    </div>
  );
}

interface DropDowmSelectData {
  option: string;
  optionTitle: string;
  itemList: string[];
  onClick: (item: string) => void;
}

/*
  [드롭 다운]
*/
export function DropDowmSelect(props: DropDowmSelectData) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //marginRight: '12px',
        marginRight: '6px',
        marginLeft: '6px',
      })}
    >
      <div
        css={css({
          width: '160px',
          height: '46px',
          flexShrink: 0,
          borderRadius: '5px',
          border: '1px solid var(--main-02, #3385FF)',
          background: '#FFF',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          paddingLeft: '21px',
          //marginRight: '12px',
        })}
      >
        <span
          css={css({
            color: props.option != null ? '#333B4F' : '#959DB1',
            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '150%',
            letterSpacing: '-0.304px',
          })}
        >
          {props.optionTitle}
        </span>
      </div>
      <div
        css={css({
          width: '160px',
          height: '282.471px',
          flexShrink: 0,
          borderRadius: '0px 0px 4px 4px',
          border: '1px solid var(--grey-05, #CACFD9)',
          overflowY: 'scroll',
          marginBottom: '1px',
          //marginRight: '12px',
        })}
      >
        {props.itemList.map((item, index) => (
          <div
            key={index}
            css={css({
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              paddingLeft: '21px',
              height: '46px',
              color: props.option == item ? '#333B4F' : '#959DB1',
              fontFamily: 'Pretendard',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: props.option == item ? 600 : 500,
              lineHeight: '150%',
              letterSpacing: '-0.304px',
              backgroundColor: props.option == item ? '#ECF6FE' : undefined,
            })}
            onClick={() => props.onClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

interface TimeInputData {
  name: string;
  value: string;
  margin?: string;
  option: string | null | Date;
  optionError: boolean;
  setIsOpen: (value: boolean) => void;
}

/*
  [시간, 분 Input]
*/
export function TimeInput(props: TimeInputData) {
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      readOnly
      css={css({
        marginRight: props.margin ? props.margin : '0px',
        color: props.option != null ? '#333B4F' : 'gray',
        fontWeight: props.option != null ? '500' : '400',
        border: props.optionError ? '0.75px solid red' : '0.75px solid #D1D3D7',
      })}
      onClick={() => props.setIsOpen(true)}
    />
  );
}
