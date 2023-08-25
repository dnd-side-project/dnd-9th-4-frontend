/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { NaviBarTitle } from 'components/matchingPage/matchingPostWritePageComponents';
import { useMutation } from 'react-query';
import { getMatchingPostSimple } from 'api/homePageApi';
import { MatchingPostList } from 'components/homePage/homePageComponents';

function RecommednPostPage() {
  // useState
  const [postList, setPostList] = useState([]);

  // API 호출
  const { mutate: post } = useMutation(() => getMatchingPostSimple(), {
    onSuccess: (data) => {
      setPostList(data);
    },
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    post();
  }, []);

  return (
    <>
      <NaviBarTitle title="맞춤추천" />
      <MatchingPostList postList={postList} />
    </>
  );
}

export default RecommednPostPage;
