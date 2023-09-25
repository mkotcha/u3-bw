import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Test from "./components/Test";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { personalFetch } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("yo!");
    dispatch(personalFetch());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
