import React from 'react';
import UserResults from '../users/UserResults';
import UserSearchBar from '../users/UserSearchBar';

const Home = () => {
  return (
    <>
      <UserSearchBar />
      <UserResults />
    </>
  );
};

export default Home;
