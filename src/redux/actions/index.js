<<<<<<< HEAD
export const SET_PERSONAL_PROFILE = 'SET_PERSONAL_PROFILE';
export const SET_OTHER_PROFILES = 'SET_OTHER_PROFILES';

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
export const setOtherProfiles = otherProfils => ({ type: SET_OTHER_PROFILES, payload: otherProfils });
=======
export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";
export const SET_OTHER_PROFILES = "SET_OTHER_PROFILES";
export const SHOW_PROFILE_MODAL = "SHOW_PROFILE_MODAL";
export const HIDE_PROFILE_MODAL = "HIDE_PROFILE_MODAL";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
export const setOtherProfiles = otherProfils => ({ type: SET_OTHER_PROFILES, payload: otherProfils });
export const showProfileModal = () => ({ type: SHOW_PROFILE_MODAL });
export const hideProfileModal = () => ({ type: HIDE_PROFILE_MODAL });
>>>>>>> 60225cbf8c3f98431cfbfdf469740812988fdf95

const url = "https://striveschool-api.herokuapp.com/api/profile/";
const options = {
<<<<<<< HEAD
  headers: { Authorization: process.env.REACT_APP_BEARER },
=======
  headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
>>>>>>> 60225cbf8c3f98431cfbfdf469740812988fdf95
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
      const resp = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExM2NlOTM3NTJhODAwMTQ1Njg3NjciLCJpYXQiOjE2OTU2Mjg1MjIsImV4cCI6MTY5NjgzODEyMn0.SrkS56T505QY6pnzO8arD1CibOq1XJ9LxYw0yBOMRm4",
        },
      });

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
