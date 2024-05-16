import React from 'react';
import Day from './Day';
import { useAppSelector } from '../../redux/hooks';


const DaysList:React.FC = () => {
    const {currentRoom} = useAppSelector((state) => state.currentRoom);
    return (
        <div className="daysList  ">
            {
                currentRoom !== null  && currentRoom.days.map((elem, idx) => 
                    <Day idx={idx} dayData={elem} key={elem.data+idx}/>
                )
            }
        </div>
    );
};

export default DaysList;