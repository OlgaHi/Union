import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const IndividualProfile = ({ getProfileById, profile: {profile}, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
    <Fragment>
    <div className='card-body bg-light'>
    <h2>{profile.user.name}</h2>
        <p>{profile.bio && <span>{profile.bio}</span>}</p>
        <p className='my-1'>{profile.user.email && <span><i className="fas fa-home"></i>{" "}{profile.user.email}</span>}</p>
        <p className='my-1'>{profile.phoneNumber && <span><i className="fas fa-mobile-alt"></i> {profile.phoneNumber}</span>}</p>

        <p className='my-1'>{profile.address && <span><i className="fas fa-home"></i>{" "}{profile.address}</span>}</p>
      </div> 
      <img
            src="https://vistatec.com/wp-content/uploads/2020/12/Life-Science-Background-Header.jpg"
            width="100%" 
            alt=""
          ></img> 
      
    </Fragment>
  )}
  </Fragment>
  );
};


  IndividualProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(IndividualProfile);

// https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80