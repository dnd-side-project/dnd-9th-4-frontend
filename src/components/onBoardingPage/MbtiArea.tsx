/** @jsxImportSource @emotion/react */
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn, stackRow } from 'components/styles/common/common';
import { mbtiArea } from 'components/styles/onBoardingPage';
import React from 'react';

const MbtiArea = ({
  onSelectTag,
  selectedTag,
}: {
  onSelectTag: (tag: string) => void;
  selectedTag: string | null;
}) => {
  const handleTagClick = (tag: string) => {
    onSelectTag(tag);
  };
  return (
    <div css={[stackColumn, mbtiArea]}>
      <div css={stackRow}>
        <UnselectedTag
          text="ISTJ"
          width={64}
          isSelected={selectedTag === 'ISTJ'}
          onClick={() => handleTagClick('ISTJ')}
        />
        <UnselectedTag
          text="ISFJ"
          width={64}
          isSelected={selectedTag === 'ISFJ'}
          onClick={() => handleTagClick('ISFJ')}
        />
        <UnselectedTag
          text="INFJ"
          width={64}
          isSelected={selectedTag === 'INFJ'}
          onClick={() => handleTagClick('INFJ')}
        />
        <UnselectedTag
          text="INTJ"
          width={64}
          isSelected={selectedTag === 'INTJ'}
          onClick={() => handleTagClick('INTJ')}
        />
      </div>
      <div css={stackRow}>
        <UnselectedTag
          text="ISTP"
          width={64}
          isSelected={selectedTag === 'ISTP'}
          onClick={() => handleTagClick('ISTP')}
        />
        <UnselectedTag
          text="ISFP"
          width={64}
          isSelected={selectedTag === 'ISFP'}
          onClick={() => handleTagClick('ISFP')}
        />
        <UnselectedTag
          text="INFP"
          width={64}
          isSelected={selectedTag === 'INFP'}
          onClick={() => handleTagClick('INFP')}
        />
        <UnselectedTag
          text="INTP"
          width={64}
          isSelected={selectedTag === 'INTP'}
          onClick={() => handleTagClick('INTP')}
        />
      </div>
      <div css={stackRow}>
        <UnselectedTag
          text="ESTP"
          width={64}
          isSelected={selectedTag === 'ESTP'}
          onClick={() => handleTagClick('ESTP')}
        />
        <UnselectedTag
          text="ESFP"
          width={64}
          isSelected={selectedTag === 'ESFP'}
          onClick={() => handleTagClick('ESFP')}
        />
        <UnselectedTag
          text="ENFP"
          width={64}
          isSelected={selectedTag === 'ENFP'}
          onClick={() => handleTagClick('ENFP')}
        />
        <UnselectedTag
          text="ENTP"
          width={64}
          isSelected={selectedTag === 'ENTP'}
          onClick={() => handleTagClick('ENTP')}
        />
      </div>
      <div css={stackRow}>
        <UnselectedTag
          text="ESTJ"
          width={64}
          isSelected={selectedTag === 'ESTJ'}
          onClick={() => handleTagClick('ESTJ')}
        />
        <UnselectedTag
          text="ESFJ"
          width={64}
          isSelected={selectedTag === 'ESFJ'}
          onClick={() => handleTagClick('ESFJ')}
        />
        <UnselectedTag
          text="ENFJ"
          width={64}
          isSelected={selectedTag === 'ENFJ'}
          onClick={() => handleTagClick('ENFJ')}
        />
        <UnselectedTag
          text="ENTJ"
          width={64}
          isSelected={selectedTag === 'ENTJ'}
          onClick={() => handleTagClick('ENTJ')}
        />
      </div>
    </div>
  );
};

export default MbtiArea;
