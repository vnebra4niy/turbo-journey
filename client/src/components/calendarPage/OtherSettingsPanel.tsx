import React from 'react';
import Thema from '../Thema';
import FavoriteButton from './FavoriteButton';
import OtSettButtons from './OtSettButtons';
import RemoveGroup from './RemoveGroup';
import { useAppSelector } from '../../redux/hooks';

const OtherSettingsPanel:React.FC<{thema: string}> = ({thema}) => {

    const { isOpenRemovepannel } = useAppSelector((state) => state.sett);

    return (
        <div className="otherSettingsPanel overflow-hidden">
            <div className="windows h-40">
                {
                    isOpenRemovepannel && <RemoveGroup thema = {thema}/>
                }
                
            </div>
            <div className="otherSettings sm:border-t-2 sm:border-black ">
                <FavoriteButton/>
                <Thema />
                <OtSettButtons/>
            </div>

        </div>
    );
};

export default OtherSettingsPanel;