import React from 'react';
import axios from 'axios';
import Loader from '../Loader';
import eye from '../../imgs/eye.png';
import Error from '../Error';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentPass, addCurrentRoom, setRoomEntered } from '../../redux/slices/currentRoomSlice';
import { webUrl } from '../../urls';


const PasswordPanel:React.FC<{thema: string}> = ({ thema }) => {
    const { currentPassword, currentName } = useAppSelector((state) => state.currentRoom);

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const navigate = useNavigate();

    const [animation, setAnimation] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [nameErr, setNameErr] = React.useState(false);
    const [isPassword, setIsPassword ] = React.useState(true);

    const dispatch = useAppDispatch();

    const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCurrentPass(e.target.value));
    };
    
    // enter room
    const goToRoom = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post(`${webUrl}getRoom`, { currentPassword, currentName });
            if (res.data === 'error') {
                setNameErr(true);
                setIsLoading(false);
                return;
            }
            setNameErr(false);
            dispatch(addCurrentRoom(res.data));
            dispatch(setRoomEntered(true));
            setIsLoading(false);
            navigate('/calendar');
        } catch (error) {
            setNameErr(true);
            setIsLoading(false);
            return;
        };
    };

    
    return (
        <div className={`account flex flex-col justify-center text-center  py-2 rounded-md px-2 duration-500 ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>{currentName}</div>
            {nameErr && <Error text='wrong password' padding='-my-2' width='text-md'/>}
            <div className=' flex items-center relative'>
            <input 
                value={currentPassword} 
                type={isPassword ? 'password' : 'text'} 
                onChange={changePass} 
                placeholder='password' 
                className={`password-fieled focus:outline-0 font-bold pr-10 rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}
            />
            <img src={eye} alt="see" onClick={() => setIsPassword(!isPassword)} className=' w-6 h-6 m-1 right-1 absolute cursor-pointer' />
            </div>
            <button onClick={goToRoom} className='border-2 border-gray-500 py-1 px-2 font-medium rounded-xl'>Enter</button>
            {
                isLoading && <Loader margin='' width='w-11'/>
            }
            
        </div>
    );
};

export default PasswordPanel;