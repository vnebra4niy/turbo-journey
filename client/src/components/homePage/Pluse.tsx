import React from 'react';
import pluse from '../../imgs/pluse.png';
import { getFavRooms } from '../../helpers/getFavRooms';
import { setFavoriteRooms, setLoadingList } from '../../redux/slices/registredSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { openCloseCreatePanel } from '../../redux/slices/settingsSlice';


const Pluse:React.FC = () => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector((state) => state.registred);
    const openCloseCP = () => {
        dispatch(openCloseCreatePanel());
    };
    React.useEffect(() => {
        const getVafContainer = async () => {
            dispatch(setLoadingList(true));
            const result = await getFavRooms(name);
            if (result === "error") {
                dispatch(setLoadingList(false));
                return
            } 
            if (typeof result !== 'string' && result.rooms ) {
                dispatch(setFavoriteRooms(result.rooms))
                dispatch(setLoadingList(false));
            }
            dispatch(setLoadingList(false));
        }
        getVafContainer()
       
    }, [])
    
    return (
        <div className="plusCont" onClick={openCloseCP}>
            <img src={pluse} alt="Add room" className='plus' />
        </div>
    );
};

export default Pluse;