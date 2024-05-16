import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { openRemovePannel, clearSettingSlice } from '../../redux/slices/settingsSlice';
import {useNavigate} from 'react-router-dom';
import { clearRoomSlice } from '../../redux/slices/currentRoomSlice';
import { clearRoomsSlice } from '../../redux/slices/roomsSlice';

const OtSettButtons:React.FC = () =>  {
    const navigate = useNavigate();
    const {name} = useAppSelector((state) => state.registred)
    const dispatch = useAppDispatch();

    const clickHome = () => {
        dispatch(clearRoomSlice());
        dispatch(clearRoomsSlice());
        dispatch(clearSettingSlice());
        navigate('/');
    };
    return (
        <div className="buttons flex justify-between mt-4">
            <button className='buttonCP' onClick={clickHome} >Home</button>
            {
                name !== 'Guest' && <button className='buttonCP text-red-700' onClick={() => dispatch(openRemovePannel())}>Remove Group</button>
            }
            
        </div>
    );
};

export default OtSettButtons;