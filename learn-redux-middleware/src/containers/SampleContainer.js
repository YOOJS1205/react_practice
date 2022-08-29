import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = () => {
  const dispatch = useDispatch();
  const { post, users, loadingPost, loadingUsers } = useSelector((state) => ({
    post: state.sample.post,
    users: state.sample.users,
  }));

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
