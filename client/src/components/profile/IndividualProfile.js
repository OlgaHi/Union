import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
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
            src="https://png.pngtree.com/thumb_back/fw800/background/20190521/pngtree-global-network-connection-technology-abstract-background-image_113942.jpg"
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

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlO43ADH78p3GbdX28Fh3mex50NaCdKpnvng&usqp=CAU

//https://png.pngtree.com/thumb_back/fw800/background/20190521/pngtree-global-network-connection-technology-abstract-background-image_113942.jpg