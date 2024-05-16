import React from 'react';
import axios from 'axios';
import { changeName, changePass, setFavoriteRooms } from '../../redux/slices/registredSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { webUrl } from '../../urls';


type RegisterProps = {
    name: string;
    error: React.Dispatch<React.SetStateAction<boolean>>;
    errorOt: React.Dispatch<React.SetStateAction<boolean>>;
    loading: React.Dispatch<React.SetStateAction<boolean>>;
    clearName: React.Dispatch<React.SetStateAction<string>>;
};

const Register:React.FC<RegisterProps> = ({name, error, loading, clearName, errorOt}) => {
    const dispatch = useAppDispatch();
    const {password} = useAppSelector((state) => state.registred);
    
    const registred = async () => {
        loading(true);
        errorOt(false);
        try {
          const res = await axios.post(`${webUrl}register`, {name, password});
          if (res.data === 'error') {
            error(true);
            loading(false);
            return;
          }
          error(false);
          loading(false);
          dispatch(setFavoriteRooms([]))
          dispatch(changeName(name));
          clearName('');
          dispatch(changePass(''));
        } catch (error) {
          alert('Connection error');
          loading(false)
          return;
        };
    };
  return (
    <button onClick={registred} className='border-2 border-gray-500 rounded-xl pb-2 pt-1 px-3 font-bold'>Register</button>
  )
}

export default Register;
