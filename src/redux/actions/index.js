export const SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE";
export const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE";
export const SET_OTHER_PROFILES = "SET_OTHER_PROFILES";
export const SHOW_PROFILE_MODAL = "SHOW_PROFILE_MODAL";
export const HIDE_PROFILE_MODAL = "HIDE_PROFILE_MODAL";
export const HIDE_PROFILE_IMAGE_MODAL = "HIDE_PROFILE_IMAGE_MODAL";
export const SHOW_PROFILE_IMAGE_MODAL = "SHOW_PROFILE_IMAGE_MODAL";
export const SHOW_EXPERIENCE_MODAL = "SHOW_EXPERIENCE_MODAL";
export const HIDE_EXPERIENCE_MODAL = "HIDE_EXPERIENCE_MODAL";
export const SET_EXPERIENCE_MODAL_ID = "SET_PERSONAL_EXPERIENCE_ID";
export const UNSET_EXPERIENCE_MODAL_ID = "UNSET_PERSONAL_EXPERIENCE_ID";
export const SET_PERSONAL_EXPERIENCES = "SET_PERSONAL_EXPERIENCES";
export const PUT_PERSONAL_EXPERIENCE = "PUT_PERSONAL_EXPERIENCE";
export const POST_PERSONAL_EXPERIENCE = "POST_PERSONAL_EXPERIENCE";
export const GENERAL_POSTS = "GENERAL_POSTS"; /* home page posts fetch */
export const SHOW_POST_MODAL = "SHOW_POST_MODAL";
export const HIDE_POST_MODAL = "HIDE_POST_MODAL";
export const SET_POST_MODAL_ID = "SET_POST_MODAL_ID";
export const UNSET_POST_MODAL_ID = "UNSET_POST_MODAL_ID";

export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
export const REM_A_FRIEND = "REM_A_FRIEND";

//add new friend

export const JOB_SEARCH_RESULT = "JOB_SEARCH_RESULT";

export const setPersonalProfile = personalProfile => ({ type: SET_PERSONAL_PROFILE, payload: personalProfile });
export const setSelectedProfile = selectedProfile => ({ type: SET_SELECTED_PROFILE, payload: selectedProfile });
export const setOtherProfiles = otherProfils => ({ type: SET_OTHER_PROFILES, payload: otherProfils });
export const showProfileModal = () => ({ type: SHOW_PROFILE_MODAL });
export const hideProfileModal = () => ({ type: HIDE_PROFILE_MODAL });
export const showProfileImageModal = () => ({ type: SHOW_PROFILE_IMAGE_MODAL });
export const hideProfileImageModal = () => ({ type: HIDE_PROFILE_IMAGE_MODAL });
export const showExperienceModal = () => ({ type: SHOW_EXPERIENCE_MODAL });
export const hideExperienceModal = () => ({ type: HIDE_EXPERIENCE_MODAL });
export const setExperienceModalId = id => ({ type: SET_EXPERIENCE_MODAL_ID, payload: id });
export const unsetExperienceModalId = () => ({ type: UNSET_EXPERIENCE_MODAL_ID });
export const setPersonalExperiences = experience => ({ type: SET_PERSONAL_EXPERIENCES, payload: experience });
export const experienPersonalExperience = experience => ({ type: PUT_PERSONAL_EXPERIENCE, payload: experience });
export const postPersonalExperience = experience => ({ type: POST_PERSONAL_EXPERIENCE, payload: experience });
export const setMainPagePosts = posts => ({ type: GENERAL_POSTS, payload: posts });
export const showPostModal = () => ({ type: SHOW_POST_MODAL });
export const hidePostModal = () => ({ type: HIDE_POST_MODAL });
export const setPostModalId = id => ({ type: SET_POST_MODAL_ID, payload: id });
export const unsetPostModalId = () => ({ type: UNSET_POST_MODAL_ID });

export const searchForJobs = result => ({ type: JOB_SEARCH_RESULT, payload: result });

//ADDING NEW FRIENDS AND REMOVING FRIENDS

export const addNewFriend = addFriend => ({ type: ADD_NEW_FRIEND, payload: addFriend });
export const removeAFriend = removeAFriend => ({ type: REM_A_FRIEND, payload: removeAFriend });

const url = "https://striveschool-api.herokuapp.com/api/profile/";
const postsUrl = "https://striveschool-api.herokuapp.com/api/posts/";
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

export const postExperienceFetch = (experience, id, formData) => {
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
        dispatch(unsetExperienceModalId());
        dispatch(hideExperienceModal());
        if (formData.get("experience") !== "undefined") {
          dispatch(postExperienceImage(id, result._id, formData));
        } else {
          dispatch(experiencesFetch(id));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putExperienceFetch = (experience, userId, expId, formData) => {
  return async dispatch => {
    const putOptions = {
      ...options,
      method: "PUT",
      body: JSON.stringify(experience),
      headers: { ...options.headers, "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(url + userId + "/experiences/" + expId, putOptions);

      if (response.ok) {
        const result = await response.json();
        //dispatch(());
        dispatch(unsetExperienceModalId());
        dispatch(hideExperienceModal());
        dispatch(experiencesFetch(userId));
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const experienceFetch = async (userId, expId) => {
  // console.log("personal fetch");
  try {
    const response = await fetch(url + userId + "/experiences/" + expId, options);
    if (response.ok) {
      const result = await response.json();

      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

/* posts Fetch */

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", options);

      if (response.ok) {
        const posts = await response.json();
        /* console.log(posts); */
        dispatch(setMainPagePosts(posts));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postExperienceImage = (userId, expId, xformData) => {
  return async dispatch => {
    const postOptions = {
      body: xformData,
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_BEARER,
      },
    };
    try {
      const response = await fetch(url + userId + "/experiences/" + expId + "/picture", postOptions);
      if (response.ok) {
        console.log(response);
        dispatch(unsetExperienceModalId());
        dispatch(experiencesFetch(userId));
      }
    } catch (error) {
      console.log("error: " + error);
    }
  };
};
/* Fetch for newPost */

export const newPostFetch = (postText, userId, postData) => {
  return async dispatch => {
    const newPost = {
      ...options,
      method: "POST",
      body: JSON.stringify(postText),
      headers: { ...options.headers, "Content-Type": "application/json" },
    };

    try {
      const resp = await fetch(postsUrl, newPost);

      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(postPostImage(userId, result._id, postData));
        dispatch(hidePostModal());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putPostFetch = (post, postId) => {
  return async dispatch => {
    const putOptions = {
      ...options,
      method: "PUT",
      body: JSON.stringify(post),
      headers: { ...options.headers, "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(postsUrl + postId, putOptions);

      if (response.ok) {
        const result = await response.json();
        //dispatch(());
        dispatch(hidePostModal());
        dispatch(unsetPostModalId());
        dispatch(fetchPosts());
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postPostImage = (userId, postId, xformData) => {
  return async dispatch => {
    const postOptions = {
      body: xformData,
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_BEARER,
      },
    };
    try {
      const response = await fetch(postsUrl + postId, postOptions);
      if (response.ok) {
        console.log(response);
        dispatch(unsetPostModalId());
        dispatch(fetchPosts(userId));
      }
    } catch (error) {
      console.log("error: " + error);
    }
  };
};
