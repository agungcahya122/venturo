import { createSlice } from "@reduxjs/toolkit";

import { Menus } from "../../types/TypeData";

interface StateType {
  menus: Menus[];
}

const initialState: StateType = {
  menus: [],
};

const SliceState = createSlice({
  name: "state",
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
