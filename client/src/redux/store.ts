import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from './slices/settingsSlice';
import registredSlice from './slices/registredSlice';
import roomsSlice from './slices/roomsSlice';
import currentRoomSlice from './slices/currentRoomSlice';

const store = configureStore({
  reducer: {
    sett: settingsSlice,
    registred: registredSlice,
    rooms: roomsSlice,
    currentRoom: currentRoomSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch