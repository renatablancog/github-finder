import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card compact side bg-base-100 shadow-xl flex-row items-center space-x-4 card-body card-body '>
      <img
        src={avatar_url}
        alt='Profile'
        className='avatar w-24 rounded-full'
      />

      <div className=''>
        <h3 className='card-title'>{login}</h3>
        <Link to={`/users/${login}`} className='text-base-content'>
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
