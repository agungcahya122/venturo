import { createSlice } from "@reduxjs/toolkit";

import { Menus } from "../../types/TypeData";

const initialState: StateType = {
  menus: [],
};

interface StateType {
  menus: Menus[];
}

const SliceState = createSlice({
  name: "datas",
  initialState: initialState,
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
  },
});

const reducer = {
  state: SliceState.reducer,
};

export const { setMenus } = SliceState.actions;
export default reducer;
