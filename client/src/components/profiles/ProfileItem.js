import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: { user: { _id, name, avatar }, bio } }) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' />
      <div>
        <h2>{name}</h2>
        <p>
          {bio && <span>{bio}</span>}
        </p>
      </div>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;