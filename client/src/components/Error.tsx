import React from 'react';

type ErrorType = {
    width?: string;
    text: string;
    padding?: string;
}

const Error:React.FC<ErrorType> = ({text, width, padding}) =>  {
    const [wdt, setWdt] = React.useState('text-lg');
    const [padd, setPadd] = React.useState('');

    React.useEffect(() => {
        width && setWdt(width);
        padding && setPadd(padding);
    }, [])
  return (
    <div className={`font-bold ${padd} ${wdt} text-center text-red-600`}>{text}</div>
  )
}

export default Error;
