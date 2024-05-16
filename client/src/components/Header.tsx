import React from 'react';
import avatar from '../imgs/avatar3.png';
import { openCloseAboutPannel } from '../redux/slices/settingsSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

type PropsType = {
  chatName: string;
};


const Header:React.FC<PropsType> = ({ chatName }) =>  {
  const { name } = useAppSelector((state) => state.registred);
  const dispatch = useAppDispatch();
  return (
    <header className='headerHome'>
      <div className="chatName">
        {chatName}
      </div>
      <div className="account">
        <div className="name cursor-pointer" onClick={() => dispatch(openCloseAboutPannel())}>
          {name}
        </div>
        <div className="avatarImg ">
          <img src={avatar} alt="avaImg" className=' rounded-full' />
        </div>
      </div>
    </header>
  );
};

export default Header;