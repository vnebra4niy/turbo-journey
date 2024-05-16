import React from 'react';
import loader from '../imgs/loader.gif';

type LoaderType = {
    width: string;
    margin: string;
}

const Loader:React.FC<LoaderType> = ({width, margin}) =>  {
    const [wdt, setWdt] = React.useState('w-10');
    const [mg, setMg] = React.useState('my-1');

    React.useEffect(() => {
        setWdt(width);
        setMg(margin);
    }, [])
  return (
    <img src={loader} alt="Loading" className={`m-auto ${wdt} ${mg} h-auto`} />
  )
}

export default Loader;
