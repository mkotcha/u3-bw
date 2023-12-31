import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, otherProfileFetch, personalFetch } from "./redux/actions";
import ProfilePage from "./components/ProfilePage";
import Topbar from "./components/Topbar";
import Test from "./components/Test";
import ExpeririencePage from "./components/ExperiencePage";
import FrontPageSizing from "./components/FrontPageSizing";
import AsideMainPage from "./components/AsideMainPage";
import FooTer from "./components/FooTer";
import PostModal from "./components/PostModal";
import Jobs from "./components/Jobs";
import JobsPageSizing from "./components/JobsPageSizing";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personalFetch());
    dispatch(otherProfileFetch());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<FrontPageSizing />} />
        <Route path="/asidemainpage" element={<AsideMainPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/profilepage/:id" element={<ProfilePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/experience" element={<ExpeririencePage />} />
        <Route path="/experience/:id" element={<ExpeririencePage />} />
        <Route path="/post" element={<PostModal />} />
        <Route path="/jobs" element={<JobsPageSizing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
