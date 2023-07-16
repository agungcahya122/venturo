import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux/es/exports";

import { Menus } from "../utils/types/TypeData";

import { setMenus } from "../utils/redux/reducers/reducer";

import Home from "../pages/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = localStorage.getItem("Datas");
    if (getDatas) {
      dispatch(setMenus(JSON.parse(getDatas)));
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App