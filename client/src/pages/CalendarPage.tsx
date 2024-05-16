import React from 'react';
import Header from '../components/Header';
import DaysList from '../components/calendarPage/DaysList';
import DayPannel from '../components/calendarPage/DayPannel';
import OtherSettingsPanel from '../components/calendarPage/OtherSettingsPanel';
import { useAppSelector } from '../redux/hooks';
import {useNavigate} from 'react-router-dom';

export default function CalendarPage() {
  const {thema} = useAppSelector((state) => state.sett);
  const {isRoomEntered, currentRoom} = useAppSelector((state) => state.currentRoom);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isRoomEntered === false) {
      navigate('/');
    };
  }, []);

  return (
    <div className={`wrapper duration-500 ${thema !== 'white' && 'bg-gray-600'}`}>
      <Header chatName={currentRoom !== null ? currentRoom.name : ''} />
      <main>
        <DaysList/>
        <div className="controolPanel ">
          <DayPannel thema={thema}/>
          <OtherSettingsPanel thema={thema} />
        </div>
      </main>
    </div>
  );
};
