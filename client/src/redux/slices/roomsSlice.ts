import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Room = {
  name: string;
}

type TypeInitialState =  {
  roomName: string;
  password: string;
  roomsArr: Room[];
  roomNameToFind: string;
}

const initialState: TypeInitialState = {
  roomName: '',
  password: '',
  roomsArr: [],
  roomNameToFind: '',
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRoomName(state, action: PayloadAction<string>) {
      state.roomName = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    addNewRoom(state) {
      state.roomsArr.push({ name: state.roomName });
    },
    loadRooms(state, action: PayloadAction<[Room] | []>) {
      state.roomsArr = action.payload;
    },
    clearRoomsSlice(state) {
      state.password = '';
      state.roomName = '';
      state.roomsArr = [];
    },
    setRoomNameToFind(state, action:PayloadAction<string>) {
      state.roomNameToFind = action.payload;
    }

  },
});


export const {
  setRoomNameToFind,
  setRoomName,
  setPassword,
  addNewRoom, loadRooms, clearRoomsSlice } = roomsSlice.actions;

export default roomsSlice.reducer;