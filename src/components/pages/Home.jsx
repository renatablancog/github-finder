import React from 'react';
import UserResults from '../users/UserResults';

const Home = () => {
  return (
    <>
      <h1 className='hero font-bold text-2xl text-primary-content'>Users</h1>
      <UserResults />
    </>
  );
};

export default Home;
