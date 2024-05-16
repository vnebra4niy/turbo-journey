import React from 'react';
import axios from 'axios';
import Loader from '../../Loader';
import { webUrl } from '../../../urls';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { setRoomEntered,setCurrentName, addCurrentRoom } from '../../../redux/slices/currentRoomSlice';


type FGroupTypes = {
  name: string
}

const FGroup: React.FC<FGroupTypes> = ({ name }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setIsLoading] = React.useState(false)
  const goToRoom = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${webUrl}getRoomFromFV`, { name });
      if (res.data === 'error') {
        setIsLoading(false);
        alert('Some was wrong');
        return;
      }
      dispatch(addCurrentRoom(res.data));
      dispatch(setRoomEntered(true));
      dispatch(setCurrentName(name))
      navigate('/calendar');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
        alert('Some was wrong');
      return;
    };
  };

  return (
    <>
      <div onClick={goToRoom} className="f-group">{name}</div>
      {
        loading && <Loader width='w-8' margin='my-0' /> 
      }
      
    </>
  )
}

export default FGroup;
