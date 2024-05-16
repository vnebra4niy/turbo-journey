import React from 'react';
import remove from '../../imgs/delete-332.png';
import axios from 'axios';
import { webUrl } from '../../urls';
import { removeMessage } from '../../redux/slices/currentRoomSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

type MessageProps = {
    elName: string;
    elMess: string;
    idx: number;
    data:string;
};

const Message: React.FC<MessageProps> = ({ elName, elMess, idx, data }) => {
    const {name} = useAppSelector((state) => state.registred);
    const {currentName} = useAppSelector((state) => state.currentRoom)
    const dispatch = useAppDispatch();

    const removeMess = async () => {
        try {
            const res = await axios.post(`${webUrl}removeMess`, {idx, currentName, data});
            if (res.data === 'error') {
                return;
            };
            dispatch(removeMessage(idx));
        } catch (error) {
            return            
        };
    };

    return (
        <div className=' font-bold pr-6 text-lg relative border-t-2 pb-1 border-black'>{elName}:
            <span className=' font-normal break-words'> {elMess}</span>
            {
                elName === name && <img 
                    onClick={removeMess} 
                    src={remove} 
                    alt="remove" 
                    className=' w-6 h-auto absolute top-1 right-1 cursor-pointer' 
                />
            }
        </div>
    )
}

export default Message;
