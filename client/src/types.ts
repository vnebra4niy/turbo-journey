export type DayArrTypes = {
    days: Array<{
        data: string;
        messages: {
            otherMess: Array<{
                name: string;
                message: string;
            }>;
            main: string;
        };
    }>;
}


type DayMessageTypes = {
    name:string;
    message:string;
}

export type DayDataTypes = {
    data: string,
    messages: {
        main?: string,
        otherMess? : DayMessageTypes[]
    }
}

export type CurrentRoomTypes = {
    _id: string;
    name: string;
    password: string;
    days: DayDataTypes[];
}