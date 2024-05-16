import React from 'react';
import axios from 'axios';
import eye from '../../imgs/eye.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearRoomSlice } from '../../redux/slices/currentRoomSlice';
import { clearRoomsSlice } from '../../redux/slices/roomsSlice';
import { clearSettingSlice, openRemovePannel } from '../../redux/slices/settingsSlice';
import { useNavigate } from 'react-router-dom';
import { webUrl } from '../../urls';


const RemoveGroup: React.FC<{ thema: string }> = ({ thema }) => {
    const { currentName } = useAppSelector((state) => state.currentRoom);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [animation, setAnimation] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [removePass, setRemovePass] = React.useState('');
    const [isPassword, setIsPassword] = React.useState(true);

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    // removing group
    const removeCurrentGroup = async () => {
        const res = await axios.post(`${webUrl}removeGroup`, { currentName, removePass });
        if (res.data === 'error') {
            setError(true);
            setRemovePass('');
            return;
        };
        dispatch(clearRoomSlice());
        dispatch(clearRoomsSlice());
        dispatch(clearSettingSlice());
        setRemovePass('');
        navigate('/');
    };

    return (
        <div className={`removeBlock ${thema === 'white' ? 'bg-gray-300' : 'bg-gray-400'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Remove</div>
            <div className='flex items-center relative w-full'>
                <input
                    type={isPassword ? 'password' : 'text'} 
                    placeholder={error ? 'Error pass' : 'Password'}
                    value={removePass} onChange={(e) => setRemovePass(e.target.value)}
                    className={`focus:outline-0 password-fieled font-bold rounded-md p-1 text-lg w-full ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`}
                />
                <img src={eye} alt="see" onClick={() => setIsPassword(!isPassword)} className=' w-6 h-6 m-1 right-1 absolute cursor-pointer' />
            </div>
            <div className=' flex justify-center my-1'>
                <button onClick={() => dispatch(openRemovePannel())} className=' rounded-l-md p-1 border-2 border-r-0 font-bold border-black'>Cancel</button>
                <button
                    className='rounded-r-md font-bold p-1 border-2 border-black text-red-600 duration-500 hover:bg-red-600 hover:text-black'
                    onClick={removeCurrentGroup}
                >Remove</button>
            </div>
        </div>
    );
};

export default RemoveGroup;
