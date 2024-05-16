import React from 'react';
import { checkMainInfo } from '../../functions/helper';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentDay } from '../../redux/slices/currentRoomSlice';
import {DayDataTypes} from '../../types'

type DayProps = {
  idx: number;
  dayData: DayDataTypes;
};

const Day:React.FC<DayProps> = ({idx, dayData}) => {
  const [color, setColor] = React.useState('');

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (idx===0) {
      setColor('bg-red-500');
    } else if(idx===1){
      setColor('bg-orange-500');
    }else if(idx===2){
      setColor('bg-yellow-400');
    }else if(idx===3){
      setColor('bg-green-500');
    }else if(idx===4){
      setColor('bg-blue-500');
    }else if(idx===5){
      setColor('bg-purple-500');
    } else {
      setColor('bg-pink-500');
    }
  },[]);

  const chooseDay = () => {
    dispatch(setCurrentDay(dayData));
  };
  return (
    <div className={`day  ${color} cursor-pointer`} onClick={chooseDay}>
      <div className=' text-xl sm:text-3xl font-bold text-center pt-2 pb-1 sm:pt-3 sm:pb-2'>{dayData.data}</div>
      <div className='text-center font-bold'>{dayData.messages.main && checkMainInfo(dayData.messages.main)}</div>
    </div>
  );
};

export default Day;