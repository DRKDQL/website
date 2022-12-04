import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  navbarPos: number;
  selectedTab: 0 | 1 | 2;
  fixedNavbar: boolean;
}

const initialState: NavigationState = {
  navbarPos: 0,
  selectedTab: 0,
  fixedNavbar: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavbarPos: (state, action: PayloadAction<number>) => {
      return { ...state, navbarPos: action.payload };
    },
    setSelectedTab: (state, action: PayloadAction<0 | 1 | 2>) => {
      return { ...state, selectedTab: action.payload };
    },
    setFixedNavbar: (state, action: PayloadAction<boolean>) => {
      return { ...state, fixedNavbar: action.payload };
    },
  },
});

export const { setNavbarPos, setSelectedTab, setFixedNavbar } =
  navigationSlice.actions;

export default navigationSlice.reducer;
