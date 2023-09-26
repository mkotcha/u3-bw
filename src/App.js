import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { personalFetch } from "./redux/actions";
import ProfilePage from "./components/ProfilePage";
import Topbar from "./components/Topbar";
import ImageProfileModal from "./components/ImageProfileModal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personalFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<ImageProfileModal />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
