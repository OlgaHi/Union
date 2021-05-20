import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile} from '../../actions/profile';

const initialState = {
  address: '',
  bio: '',
  phoneNumber: '',
};

const Profile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState(initialState);

  const {
    address,
    bio, 
    phoneNumber
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your profile
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Something about you"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-secondary my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
    );
  }

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};


export default connect(null, { createProfile })(withRouter(Profile));
