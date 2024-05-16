import React from 'react';
import FGroup from './FGroup';
import { useAppSelector } from '../../../redux/hooks';
import Loader from '../../Loader';

const FavoriteList:React.FC = () =>  {
  const { favoritRooms, loadingList } = useAppSelector((state) => state.registred);

  return (
    <div className='flex flex-col gap-2 w-full'>
      {
        favoritRooms.length === 0 && <div className=' font-bold text-2xl -my-1 text-gray-500'>No rooms</div>
      }
      {
        loadingList && <Loader width='w-10' margin='my-1' />
      }
      {
        favoritRooms.map((elem, idx) => (
          <FGroup key={elem+idx} name={elem} />
        ))
      }
      
    </div>
  )
}


export default FavoriteList;