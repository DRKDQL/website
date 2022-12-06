import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  navbarPos: number;
  selectedTab: number;
  fixedNavbar: boolean;
  mobileMenuOpen: boolean;
}

const initialState: NavigationState = {
  navbarPos: 0,
  selectedTab: 0,
  fixedNavbar: false,
  mobileMenuOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavbarPos: (state, action: PayloadAction<number>) => {
      return { ...state, navbarPos: action.payload };
    },
    setSelectedTab: (state, action: PayloadAction<number>) => {
      return { ...state, selectedTab: action.payload };
    },
    setFixedNavbar: (state, action: PayloadAction<boolean>) => {
      return { ...state, fixedNavbar: action.payload };
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, mobileMenuOpen: action.payload };
    },
  },
});

export const {
  setNavbarPos,
  setSelectedTab,
  setFixedNavbar,
  setMobileMenuOpen,
} = navigationSlice.actions;

export default navigationSlice.reducer;
