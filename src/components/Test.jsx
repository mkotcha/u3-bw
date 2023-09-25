import { useEffect } from "react";
import { personalFetch } from "../redux/actions";
import { useDispatch } from "react-redux";

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("yo!");
    dispatch(personalFetch());
  }, []);

  return (
    <>
      <p>ciao!</p>
    </>
  );
};

export default Test;
