import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  name: string;
  password: string;
  favoritRooms: string[];
  loadingList: boolean;
}

const initialState: initialStateType = {
    name: localStorage.getItem('CalendarAppUserName') || 'Guest',
    password: '',
    favoritRooms: [],
    loadingList: false
};

export const registredSlice = createSlice({
  name: 'registred',
  initialState,
  reducers: {
    changeName(state, action:PayloadAction<string>) {
        state.name = action.payload;
        localStorage.setItem('CalendarAppUserName', action.payload);
    },
    changePass(state, action:PayloadAction<string>) {
      state.password = action.payload;
    },
    setFavoriteRooms(state, action:PayloadAction<string[]>) {
      state.favoritRooms = action.payload
    },
    setLoadingList(state, action:PayloadAction<boolean>) {
      state.loadingList = action.payload
    }
  },
})


export const { changeName, changePass, setFavoriteRooms, setLoadingList } = registredSlice.actions;

export default registredSlice.reducer;