import React from 'react';
import Header from '../components/Header';
import Settings from '../components/homePage/Settings';
import Pluse from '../components/homePage/Pluse';
import Rooms from '../components/homePage/Rooms';
import Footer from '../components/Footer'
import { useAppSelector } from '../redux/hooks';


export default function HomePage() {
  const {thema} = useAppSelector((state) => state.sett);
  
  return (
    <div className={`wrapper duration-500 ${thema !== 'white' && 'bg-gray-600'}`}>
      <Header chatName=''/>
      <main className='mainHome '>
        <Rooms />
        <Pluse/>
        <Settings thema={thema}/>
      </main>
      <Footer/>
    </div>
  );
};