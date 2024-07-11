import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidHomeHeart } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className='hero bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-8xl font-bold pb-6'>Oops! </h1>
          <p className='text-4xl mb-8'>404 - Page Not Found</p>
          <Link to='/'>
            <button className='btn btn-primary '>
              <BiSolidHomeHeart className='text-xl' />
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
