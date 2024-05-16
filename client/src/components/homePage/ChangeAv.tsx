import React from 'react';
import eye from '../../imgs/eye.png';
import Loader from '../Loader';
import Login from './Login';
import Register from './Register';
import Error from '../Error';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changePass } from '../../redux/slices/registredSlice';


const ChangeAv:React.FC<{thema: string}> = ({thema}) => {
    const [name, setName] = React.useState('');
    const [isPassword, setIsPassword ] = React.useState(true);
    const [isLoading, setIsLoading ] = React.useState(false);
    const [isLoginErr, setIsLoginErr ] = React.useState(false);
    const [isRegistredErr, setIsRegistredErr ] = React.useState(false);
    const {password} = useAppSelector((state) => state.registred);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const [animation, setAnimation] = React.useState(false);

    
    return (
        <div className={`changeAv ${thema !== 'white' ? 'bg-gray-400' : 'bg-gray-300'} -mt-80 ${animation && ' translate-y-80'}`}>
            <div className=' font-bold text-xl'>Login/Register</div>
            {
                isLoading && <Loader margin='' width='w-10'/>
            }
            {
                isLoginErr && <Error text='Wrong password or login' width='text-md' padding='-my-2'/>
            }
            {
                isRegistredErr && <Error text='This login already taken' width='text-md' padding='-my-2'/>
            }
            
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder='enter name' 
                value={name}
                className={`focus:outline-0 font-bold rounded-md p-1 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            <div className='flex items-center relative w-full'> 
            <input 
                type={isPassword ? 'password' : 'text'}
                onChange={(e) => dispatch(changePass(e.target.value))}
                placeholder='enter password' 
                value={password}
                className={`password-fieled focus:outline-0 font-bold rounded-md p-1 pr-10 text-lg w-full  ${thema !== 'white' ? 'bg-gray-500' : 'bg-white'}`} />
            
            <img src={eye} alt="see" onClick={() => setIsPassword(!isPassword)} className=' w-6 h-6 m-1 right-1 absolute cursor-pointer' />
            </div>
            <div className=" flex justify-between w-full">
                <Login name={name} clearName={setName} error={setIsLoginErr} errorOt={setIsRegistredErr} loading={setIsLoading}/>
                <Register name={name} clearName={setName} error={setIsRegistredErr} errorOt={setIsLoginErr} loading={setIsLoading}/>
            </div>
        </div>
    );
};

export default ChangeAv;