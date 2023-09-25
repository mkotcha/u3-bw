export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";
export const SET_OTHER_PROFILES = "SET_OTHER_PROFILES";
export const SHOW_PROFILE_MODAL = "SHOW_PROFILE_MODAL";
export const HIDE_PROFILE_MODAL = "HIDE_PROFILE_MODAL";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
export const setOtherProfiles = otherProfils => ({ type: SET_OTHER_PROFILES, payload: otherProfils });
export const showProfileModal = () => ({ type: SHOW_PROFILE_MODAL });
export const hideProfileModal = () => ({ type: HIDE_PROFILE_MODAL });

const url = "https://striveschool-api.herokuapp.com/api/profile/";
const options = {
  headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
};

export const personalFetch = () => {
  return async dispatch => {
    // console.log("personal fetch");
    try {
      const response = await fetch(url + "me", options);
      if (response.ok) {
        const result = await response.json();
        dispatch(setPersonalProfile(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const otherProfileFetch = () => {
  return async dispatch => {
    let profilesArray = [];
    console.log("other profile fetch");
    try {
      const resp = await fetch(url, options);
      if (resp.ok) {
        profilesArray = await resp.json();
        dispatch(setOtherProfiles(profilesArray));
        return profilesArray;
      }
    } catch (error) {
      console.log(error);
    } finally {
      return profilesArray;
    }
  };
};

export const putPersonalFetch = async profile => {
  const putOptions = {
    ...options,
    method: "PUT",
    body: JSON.stringify(profile),
    headers: { ...options.headers, "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(url, putOptions);

    if (response.ok) {
      const result = await response.json();

      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};
