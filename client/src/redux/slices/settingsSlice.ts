import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  thema: localStorage.getItem('CalendarThema') || 'white',
  isOpenPasPanel: false,
  isOpenCreatePanel: false,
  isOpenChangeAvPanel: false,
  isOpenRemovepannel: false,
  isOpenAboutPannel: false
};



export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeThema(state) {
        if (state.thema === 'white') {
          localStorage.setItem('CalendarThema', 'dark');
          state.thema = 'dark' ;
        } else {
          localStorage.setItem('CalendarThema', 'white');
          state.thema = 'white';
        }
    },
    openClosePasPanel(state) {
      state.isOpenPasPanel = true;
      state.isOpenCreatePanel = false;
      state.isOpenChangeAvPanel = false;
      state.isOpenAboutPannel = false;
    },
    openCloseCreatePanel(state) {
      state.isOpenCreatePanel = true;
      state.isOpenPasPanel = false;
      state.isOpenChangeAvPanel = false;
      state.isOpenAboutPannel = false;
    },
    openCloseChangeAvPanel(state) {
      state.isOpenChangeAvPanel = true;
      state.isOpenPasPanel = false;
      state.isOpenCreatePanel = false;
      state.isOpenAboutPannel = false;
    },
    openCloseAboutPannel(state) {
      state.isOpenAboutPannel = true;
      state.isOpenChangeAvPanel = false;
      state.isOpenPasPanel = false;
      state.isOpenCreatePanel = false;
    },
    openRemovePannel(state) {
      state.isOpenRemovepannel = !state.isOpenRemovepannel;
    },

    clearSettingSlice(state) {
      state.isOpenPasPanel = false;
      state.isOpenCreatePanel = false;
      state.isOpenChangeAvPanel =  false;
      state.isOpenRemovepannel = false;
      state.isOpenAboutPannel = false;
    }
  },
});


export const { changeThema,
   openClosePasPanel,
   openCloseCreatePanel,
   openCloseChangeAvPanel,
   openRemovePannel,
   clearSettingSlice,
   openCloseAboutPannel
} = settingsSlice.actions;

export default settingsSlice.reducer;