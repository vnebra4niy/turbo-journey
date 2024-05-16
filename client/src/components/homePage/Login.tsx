import React from 'react';
import axios from 'axios';
import { webUrl } from '../../urls';
import { changeName, changePass, setFavoriteRooms } from '../../redux/slices/registredSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

type LoginProps = {
    name: string;
    error: React.Dispatch<React.SetStateAction<boolean>>;
    errorOt: React.Dispatch<React.SetStateAction<boolean>>;
    loading: React.Dispatch<React.SetStateAction<boolean>>;
    clearName: React.Dispatch<React.SetStateAction<string>>;
}

const Login:React.FC<LoginProps> = ({name, error, loading, clearName, errorOt}) => {
    const dispatch = useAppDispatch();
    const {password} = useAppSelector((state) => state.registred);

    const login = async () => {
      loading(true);
      errorOt(false);
      try {
        const res = await axios.post(`${webUrl}login`, {name, password});
        if (res.data === 'error') {
          error(true);
          loading(false);
          clearName('');
          dispatch(changePass(''));
          return;
        }
        if (typeof res.data !== 'string') {
          dispatch(setFavoriteRooms(res.data));
        } else {
          dispatch(setFavoriteRooms([]));
        }
        error(false);
        loading(false);
        dispatch(changeName(name));
        clearName('');
        dispatch(changePass(''));
      } catch (error) {
        alert('Connection error');
        loading(false);
        return;
      };
    };
  return (
    <button onClick={login} className='border-2 border-gray-500 rounded-xl pb-2 pt-1 px-3 font-bold'>Login</button>
  )
}

export default Login;
