export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";
export const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE";
export const SET_OTHER_PROFILES = "SET_OTHER_PROFILES";
export const SHOW_PROFILE_MODAL = "SHOW_PROFILE_MODAL";
export const HIDE_PROFILE_MODAL = "HIDE_PROFILE_MODAL";
export const SHOW_EXPERIENCE_MODAL = "HIDE_EXPERIENCE_MODALL";
export const HIDE_EXPERIENCE_MODAL = "HIDE_EXPERIENCE_MODAL";
export const SET_PERSONAL_EXPERIENCES = "SET_PERSONAL_EXPERIENCES";
export const PUT_PERSONAL_EXPERIENCE = "PUT_PERSONAL_EXPERIENCE";
export const POST_PERSONAL_EXPERIENCE = "POST_PERSONAL_EXPERIENCE";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
export const setSelectedProfile = selectedProfile => ({ type: SET_SELECTED_PROFILE, payload: selectedProfile });
export const setOtherProfiles = otherProfils => ({ type: SET_OTHER_PROFILES, payload: otherProfils });
export const showProfileModal = () => ({ type: SHOW_PROFILE_MODAL });
export const hideProfileModal = () => ({ type: HIDE_PROFILE_MODAL });
export const showExperienceModal = () => ({ type: SHOW_EXPERIENCE_MODAL });
export const hideExperienceModal = () => ({ type: HIDE_EXPERIENCE_MODAL });
export const setPersonalExperiences = experience => ({ type: SET_PERSONAL_EXPERIENCES, payload: experience });
export const putPersonalExperience = experience => ({ type: PUT_PERSONAL_EXPERIENCE, payload: experience });
export const postPersonalExperience = experience => ({ type: POST_PERSONAL_EXPERIENCE, payload: experience });

const url = "https://striveschool-api.herokuapp.com/api/profile/";
// const url = "https://barbie-linkedin.cyclic.cloud/api/profile/";

const options = {
  headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
  // headers: {
  //   team: "team-5",
  // },
};

export const personalFetch = (id = "me") => {
  return async dispatch => {
    // console.log("personal fetch");
    try {
      const response = await fetch(url + id, options);
      if (response.ok) {
        const result = await response.json();
        if (id === "me") {
          dispatch(setPersonalProfile(result));
        } else {
          dispatch(setSelectedProfile(result));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const otherProfileFetch = () => {
  return async dispatch => {
    try {
      const resp = await fetch(url, options);
      if (resp.ok) {
        const profilesArray = await resp.json();
        dispatch(setOtherProfiles(profilesArray));
        // return profilesArray;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putPersonalFetch = profile => {
  return async dispatch => {
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
        dispatch(personalFetch());
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const experiencesFetch = id => {
  return async dispatch => {
    // console.log("personal fetch");
    try {
      const response = await fetch(url + id + "/experiences", options);
      if (response.ok) {
        const result = await response.json();

        dispatch(setPersonalExperiences(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postExperienceFetch = (experience, id) => {
  return async dispatch => {
    const putOptions = {
      ...options,
      method: "POST",
      body: JSON.stringify(experience),
      headers: { ...options.headers, "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(url + id + "/experiences", putOptions);

      if (response.ok) {
        const result = await response.json();
        //dispatch(());
        dispatch(hideExperienceModal());
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
