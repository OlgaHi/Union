import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({ profile: { user: { _id, name, avatar }, bio, phoneNumber } }) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='user' className='round-img'/>
      <div>
        <h2>{name}</h2>
        <p>
          {bio && <span>{bio}</span>}
        </p>
        <p className='my-1'>{phoneNumber && <span><i className="fas fa-mobile-alt"></i> {phoneNumber}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>   
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;