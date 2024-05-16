import React from 'react';
import axios from 'axios';
import Loader from '../Loader';
import Error from '../Error';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addMainMessage, addMessage } from '../../redux/slices/currentRoomSlice';
import { setMessage } from '../../redux/slices/currentRoomSlice';
import {webUrl} from '../../urls';

type PropsType = {
    data: string;
    message: string;
};

const ButtonsDayPannel:React.FC<PropsType> = ({data, message}) => {
    const {currentName} = useAppSelector((state) => state.currentRoom);
    const {name} = useAppSelector((state) => state.registred);

    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const dispatch = useAppDispatch();

    //send message as main
    const sendAsMain = async () => {
        setIsLoading(true);
        const res = await axios.post(`${webUrl}sendMain`, {data, message, roomName: currentName});
        if (res.data === 'error') {
            setIsError(true);
            setIsLoading(false);
            return;
        };
        setIsLoading(false);
        dispatch(addMainMessage([message, data]));
        dispatch(setMessage(''));
    };

    //send message as common
    const sendAsMessage = async () => {
        setIsLoading(true);
        const res = await axios.post(`${webUrl}sendMessage`, {data, message, roomName: currentName, name});
        if (res.data === 'error') {
            setIsError(true);
            setIsLoading(false);
            return;
        };
        setIsLoading(false);
        dispatch(addMessage([{name, message}, data]));
        dispatch(setMessage(''));
    };
    return (
        <>
        {isError && <Error width='text-lg' padding='px-2' text='Error'/> }
        {isLoading &&  <Loader margin='my-2' width='w-11'/>}
        <div className="buttonsDayPannel pt-4 flex justify-between">
            <button onClick={sendAsMessage} className='sendMessageButtons '>Send</button>
            <button onClick={sendAsMain}className='sendMessageButtons '>Send as main</button>
        </div>
        </>
    );
}

export default ButtonsDayPannel;