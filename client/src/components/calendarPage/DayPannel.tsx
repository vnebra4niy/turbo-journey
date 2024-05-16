import React from 'react';
import ButtonsDayPannel from './ButtonsDayPannel';
import Message from './Message';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMessage } from '../../redux/slices/currentRoomSlice';



const DayPannel:React.FC<{thema: string}> = ({ thema }) =>  {
  const {currendDay, message} = useAppSelector((state) => state.currentRoom);
  const {name} = useAppSelector((state) => state.registred)

  const dispatch = useAppDispatch();

  return (
    <div className={`dayPanel ${thema === 'white' ? 'bg-gray-300' : 'bg-gray-400'}`}>
      {currendDay !== null ? <> <div className=' font-bold text-center pt-1 text-2xl'>{currendDay.data}</div>
      <div className=' font-bold text-xl py-2'>Main Info:
        <span className=' font-normal break-words'> {currendDay.messages.main !== undefined ? currendDay.messages.main : 'No main events'}</span>
      </div>

      {
        currendDay.messages.otherMess !== undefined && currendDay.messages.otherMess.map((elem, idx) => 
          <Message data={currendDay.data} key = {elem.name +idx} elMess={elem.message} idx={idx} elName = {elem.name}/>
        ) 
      }
      
      {
        name !== "Guest" && <textarea value={message} onChange={(e) => dispatch(setMessage(e.target.value))} placeholder='enter note' className={` w-full h-24 resize-none mt-2 rounded-xl p-2 focus:outline-0 ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}></textarea>
      }
      {
        name !== "Guest" && <ButtonsDayPannel data={currendDay.data} message={message} />
      }
      </> : <> <div className=' text-3xl text-center py-9 font-bold text-gray-600'>Choose Day</div></>
      
      }
    </div>
  );
};

export default DayPannel;