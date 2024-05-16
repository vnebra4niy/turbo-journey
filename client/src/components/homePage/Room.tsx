import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentName, setCurrentPass } from '../../redux/slices/currentRoomSlice';
import { openClosePasPanel } from '../../redux/slices/settingsSlice';

const Room:React.FC<{roomName: string, bgIdx:number}> = ({ roomName, bgIdx }) => {
    const [color, setColor] = React.useState('');

    const dispatch = useAppDispatch();

    const pressRoom = () => {
        dispatch(openClosePasPanel());
        dispatch(setCurrentName(roomName));
        dispatch(setCurrentPass(''));
    };

    React.useEffect(() => {
        if ((bgIdx+1) % 7 === 0) {
            setColor('bg-yellow-500');
        } else if( (bgIdx+1) % 6 === 0) {
            setColor('bg-orange-500');
        } else if((bgIdx+1) % 5 === 0) {
            setColor('bg-green-500');
        }else if((bgIdx+1) % 4 === 0) {
            setColor('bg-blue-500');
        }else if((bgIdx+1) % 3 === 0) {
            setColor('bg-purple-500');
        }else if((bgIdx+1) % 2 === 0) {
            setColor('bg-lime-500');
        } else {
            setColor('bg-red-400');
        };
    }, []);

    return (
        <div className={`room p-2 mb-1 w-full ${color} rounded-md cursor-pointer h-10`} onClick={pressRoom}>
            <span className='font-bold'>{roomName}</span>
        </div>
    );
};

export default Room;