/** @jsxImportSource @emotion/react */
import UnselectedTag from 'components/common/UnselectedTag';
import { stackColumn, stackRow } from 'components/styles/common/common';
import React, { useState } from 'react';

const InterestedExerciseArea = ({
  onUpdateSelectedTags,
  defaultTags = [],
}: {
  onUpdateSelectedTags: (tags: string[]) => void;
  defaultTags?: string[];
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultTags);

  const handleTagClick = (tag: string) => {
    let updateTags;
    if (selectedTags.includes(tag)) {
      updateTags = selectedTags.filter((t) => t !== tag);
    } else {
      updateTags = [...selectedTags, tag];
    }

    setSelectedTags(updateTags);
    onUpdateSelectedTags(updateTags);
  };

  return (
    <div css={stackColumn}>
      <div css={stackRow}>
        <UnselectedTag
          text="헬스"
          onClick={() => handleTagClick('헬스')}
          isSelected={selectedTags.includes('헬스')}
        />
        <UnselectedTag
          text="러닝"
          onClick={() => handleTagClick('러닝')}
          isSelected={selectedTags.includes('러닝')}
        />
        <UnselectedTag
          text="수영"
          onClick={() => handleTagClick('수영')}
          isSelected={selectedTags.includes('수영')}
        />
        <UnselectedTag
          text="등산"
          onClick={() => handleTagClick('등산')}
          isSelected={selectedTags.includes('등산')}
        />
      </div>
      <div css={stackRow}>
        <UnselectedTag
          text="싸이클"
          onClick={() => handleTagClick('싸이클')}
          isSelected={selectedTags.includes('싸이클')}
        />
        <UnselectedTag
          text="기타"
          onClick={() => handleTagClick('기타')}
          isSelected={selectedTags.includes('기타')}
        />
      </div>
    </div>
  );
};

export default InterestedExerciseArea;
