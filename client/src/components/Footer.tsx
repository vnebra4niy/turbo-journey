import React from 'react';
import MotivationalQuote from './homePage/MotivationalQuote';

const Footer: React.FC = () =>  {
    const [wdt, setWdt] = React.useState('text-lg');
    const [padd, setPadd] = React.useState('');

    React.useEffect(() => {
        setWdt('w-500');
        setPadd('p-4');
    }, []);

    return (
        <div className={`font-bold ${padd} ${wdt} text-center text-black-600`}>
            <MotivationalQuote/>
        </div>
    );
};

export default Footer;