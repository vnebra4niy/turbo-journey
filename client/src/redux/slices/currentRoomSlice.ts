import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DayDataTypes, CurrentRoomTypes } from '../../types';




type TypeInitialState = {
  currentName: string;
  currentPassword: string;
  currentRoom: CurrentRoomTypes | null;
  isRoomEntered: boolean;
  currendDay: DayDataTypes | null;
  message: string;
}

type MessageObjType = {
  name:string;
  message: string;
}


const initialState: TypeInitialState = {
  currentName: '',
  currentPassword: '',
  currentRoom: null,
  isRoomEntered: false,
  currendDay: null,
  message: ''
};

export const currentRoomSlice = createSlice({
  name: 'currentRoom',
  initialState,
  reducers: {
    setCurrentName(state, action: PayloadAction<string>) {
      state.currentName = action.payload;
    },
    setCurrentPass(state, action:PayloadAction<string>) {
      state.currentPassword = action.payload;
    },
    addCurrentRoom(state, action: PayloadAction<CurrentRoomTypes>) {
      state.currentRoom = action.payload;
    },
    setRoomEntered(state, action: PayloadAction<boolean>) {
      state.isRoomEntered = action.payload;
    },
    setCurrentDay(state, action: PayloadAction<DayDataTypes>) {
      state.currendDay = action.payload;
    },
    setMessage(state, action:PayloadAction<string>) {
      state.message = action.payload;
    },
    removeMessage(state, action:PayloadAction<number>) {
      state.currendDay?.messages.otherMess?.splice(action.payload, 1);
      state.currentRoom?.days.forEach(elem => {
        if (elem.data === state.currendDay?.data) {
          elem.messages.otherMess?.splice(action.payload, 1);
        };
      });
    },
    addMainMessage(state, action:PayloadAction<string[]>) {
      
      if (state.currendDay !== null && state.currentRoom !== null) {
        state.currendDay.messages.main = action.payload[0];
        state.currentRoom.days.forEach(element => {
          if (element.data === action.payload[1]) {
            element.messages.main = action.payload[0];
          };
        });
      }

    },
    addMessage(state, action:PayloadAction<[MessageObjType, string]>) {
      if (state.currendDay !== null && state.currentRoom !== null) {
        if (state.currendDay.messages.otherMess) {
          state.currendDay.messages.otherMess.push(action.payload[0]);
          state.currentRoom.days.forEach(element => {
            if (element.data === action.payload[1] && element.messages.otherMess) {
              element.messages.otherMess.push(action.payload[0]);
            };
          });
        } else {
          state.currendDay.messages.otherMess = [];
          state.currendDay.messages.otherMess.push(action.payload[0]);
          state.currentRoom.days.forEach(element => {
            if (element.data === action.payload[1]) {
              element.messages.otherMess = [];
              element.messages.otherMess.push(action.payload[0]);
            };
          });
        };
      }
      
    },
    clearRoomSlice(state) {
      state.currentName = '';
      state.currentPassword = '';
      state.currentRoom = null;
      state.isRoomEntered = false;
      state.currendDay = null;
      state.message = '';
    }
  },
});


export const { setCurrentPass,
  setCurrentName,
  addCurrentRoom,
  setRoomEntered,
  setCurrentDay,
  setMessage,
  addMainMessage,
  addMessage,
  clearRoomSlice,
  removeMessage }
  = currentRoomSlice.actions;

export default currentRoomSlice.reducer;