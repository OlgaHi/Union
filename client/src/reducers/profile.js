import {
  GET_PROFILE,
  GET_PROFILES,
  RESET_PROFILE_LOADING,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
}

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
      case RESET_PROFILE_LOADING:
        return {
        ...state,
          loading: true
        };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      }
    default:
      return state;
  }
}

export default profileReducer;