import React from 'react';
import Thema from '../Thema';
import ChangeAv from './ChangeAv';
import CreateRoom from './CreateRoom';
import PasswordPanel from './PasswordPanel';
import About from './About';
import { openCloseChangeAvPanel } from '../../redux/slices/settingsSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const Settings:React.FC<{thema: string}> = ({thema}) => {
    
    const dispatch = useAppDispatch();

    const {isOpenPasPanel, isOpenCreatePanel, isOpenChangeAvPanel, isOpenAboutPannel} = useAppSelector((state) => state.sett);
    
    return (
        <div className="settings">
            <div className='font-bold text-xl'>
                Settings
            </div>
            <div className="pannelRoom flex flex-col justify-between p-1 overflow-hidden ">
                <div className=" h-full scrollbar-rooms overflow-auto ">
                    {
                        isOpenCreatePanel && <CreateRoom thema={thema}/>
                    }
                
                    {
                        isOpenChangeAvPanel && <ChangeAv thema={thema}/> 
                    }
                    {
                        isOpenPasPanel && <PasswordPanel thema={thema}/>
                    }
                    {
                        isOpenAboutPannel && <About thema={thema}/>
                    }
                    
                </div>
                <div className="settingsDefPanel border-t-2 border-black">
                    <Thema/>
                    <div className=' w-full flex justify-center'>
                        <button
                            onClick={() => dispatch(openCloseChangeAvPanel())} 
                            className=' border-2 border-black rounded-3xl py-1 px-4 font-bold mt-2 mb-1 '>
                            Login/Sing up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;