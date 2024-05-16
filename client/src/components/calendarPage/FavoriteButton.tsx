import React from 'react';
import axios from 'axios';
import { getFavRooms } from '../../helpers/getFavRooms';
import { webUrl } from '../../urls';
import { setFavoriteRooms } from '../../redux/slices/registredSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import loader from '../../imgs/loader.gif';


const FavoriteButton: React.FC = () => {
    const { name, favoritRooms } = useAppSelector((state) => state.registred);
    const dispatch = useAppDispatch();
    const {currentName} = useAppSelector((state) => state.currentRoom)
    const [isInFavorite, setIsInFavorite] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        favoritRooms.forEach(elem => {
            if (elem === currentName) {
                setIsInFavorite(true);
            }
        })
    }, [])

    const pressFavorite = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${webUrl}favoriteReq`, {name, roomName:currentName})
            if (res.data === 'error') {
                alert('Something was wrong')
                setLoading(false);
                return
            }
        } catch (error) {
            alert('Something was wrong')
            setLoading(false);
            return
        }
        setLoading(false);
        setIsInFavorite(!isInFavorite)
    }
    return (
        <div className={`w-full flex justify-center mb-2 ${name === 'Guest' ? 'hidden' : ''}`}>
            <button 
            onClick={pressFavorite}
            type='button' 
            className={` border-2 ${isInFavorite ? 'bg-green-400' : 'bg-red-400'} rounded-lg font-bold mt-4 border-black py-1 px-4`}>
                Favorite
                {
                    loading && <img src={loader} className='w-6 h-6 my-1 m-auto' />
                }
                
            </button>
        </div>
    )
}

export default FavoriteButton;