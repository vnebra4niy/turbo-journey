import React from 'react';
import axios from 'axios';
import eye from '../../imgs/eye.png';
import Loader from '../Loader';
import Error from '../Error';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setRoomName, setPassword, addNewRoom } from '../../redux/slices/roomsSlice';
import { webUrl } from '../../urls';


const CreateRoom:React.FC<{thema: string}> = ({thema}) => {
    const {roomName, password, roomsArr} = useAppSelector((state) => state.rooms);

    const [animation, setAnimation] = React.useState(false);
    const [nameErr, setNameErr] = React.useState(false);
    const [isPassword, setIsPassword ] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const dispatch = useAppDispatch();

    // function to create game
    const createRoom = async () => {
        setIsLoading(true);
        try {
            for (let i = 0; i < roomsArr.length; i++) {
                if (roomsArr[i].name.replace(/ /g, '') === roomName.replace(/ /g, '') ) {
                    setNameErr(true);
                    setIsLoading(false);
                    return;
                };
            };
            await axios.post(`${webUrl}createRoom`, {password, roomName});
            dispatch(addNewRoom());
            dispatch(setRoomName(''));
            dispatch(setPassword(''));
            setNameErr(false);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            alert('Something was wrong');
            setIsLoading(false);
        };
    };
    
    return (
        <div className={`createRoom ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Create room</div>
                {isLoading && <Loader margin='' width='w-11'/>}
                {nameErr && <Error text='Enter unique name' width='text-sm' padding='-my-2'/>}
            <input 
                type="text" 
                placeholder='enter room name'
                value={roomName} 
                onChange={(e) => dispatch(setRoomName(e.target.value))}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} 
            />
            <div className='flex items-center relative w-full'>
            <input 
                placeholder='enter password' 
                value={password}
                type={isPassword ? 'password' : 'text'} 
                onChange = {(e) => dispatch(setPassword(e.target.value))}
                className={`password-fieled focus:outline-0 pr-10 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}  
            />
            <img src={eye} alt="see" onClick={() => setIsPassword(!isPassword)} className=' w-6 h-6 m-1 right-1 absolute cursor-pointer' />
            </div>
            <button
                onClick={createRoom} 
                className='border-2 border-gray-500 py-1 px-2 font-medium rounded-xl'>
            Create</button>
        </div>
    );
};

export default CreateRoom;