import { webUrl } from "../urls";
import axios from "axios";

type responceTypes = {
    name: string;
    password: string;
    rooms?: string[]; 
}

export const getFavRooms = async (userName: string): Promise<responceTypes | string> =>  {
    try {
        const res = await axios.post(`${webUrl}getFavRooms`, {userName});
        if (res.data === 'error') {
            return 'error'
        }
        return res.data
    } catch (error) {
        return 'error'
    }
}