import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Test from "./components/Test";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { personalFetch } from "./redux/actions";
import Topbar from "./components/Topbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("yo!");
    dispatch(personalFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
