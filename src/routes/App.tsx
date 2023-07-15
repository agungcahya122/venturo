import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux/es/exports";

import { setMenus } from "../utils/redux/reducer/reducer";
import { Menus } from "../utils/types/TypeData";

import Home from "../pages/Home";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getDatas = localStorage.getItem("Datas");

  //   if (getDatas) {
  //     dispatch(setMenus(JSON.parse(getDatas)));
  //   }
  // }, [])

  // console.log(dispatch)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App