export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });

const url = "https://striveschool-api.herokuapp.com/api/profile/";
const options = {
  headers: { Authorization: "Bearer " + process.env.REACT_APP_BEARER },
};

export const personalFetch = () => {
  return async dispatch => {
    console.log("personal fetch");
    try {
      const response = await fetch(url + "me", options);

      if (response.ok) {
        const result = await response.json();
        dispatch(setPersonalProfile(result));
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
