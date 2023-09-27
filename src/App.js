import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { otherProfileFetch, personalFetch } from "./redux/actions";
import ProfilePage from "./components/ProfilePage";
import Topbar from "./components/Topbar";
import FooTer from "./components/FooTer";
import Test from "./components/Test";
import ExpeririencePage from "./components/ExperiencePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personalFetch());
    dispatch(otherProfileFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/profilepage/" element={<ProfilePage />} />
        <Route path="/profilepage/:id" element={<ProfilePage />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/experience" element={<ExpeririencePage />} />
      </Routes>
      <FooTer />
    </BrowserRouter>
  );
}

export default App;
