import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import { encryptTransform } from "redux-persist-transform-encrypt";
import meReducer from "../reducers/me";
import otherProfilesReducers from "../reducers/otherProfils";
import profileModalReducer from "../reducers/profileModal";
import selectedProfileReducer from "../reducers/selectedProfile";

// const persistConfig = {
//   key: "root",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_PERSIST_KEY,
//     }),
//   ],
// };

const mainReducer = combineReducers({
  // reducer here
  me: meReducer,
  profiles: otherProfilesReducers,
  selectedProfile: selectedProfileReducer,
  profileModal: profileModalReducer,
});

// const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  // reducer
  reducer: mainReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
