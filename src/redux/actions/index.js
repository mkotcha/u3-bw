export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";
// export const PUT_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
// export const putPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE });

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
        console.log(result);
      }
    } catch (error) {
      console.log(error);
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
  console.log("put", putOptions);

  console.log("PUT personal fetch");
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
