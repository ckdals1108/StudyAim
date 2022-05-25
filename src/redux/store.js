const initialState = {
    login:false,
    userId:""
};

export const ONLOGIN = 'ONLOGIN';
export const OFFLOGIN = 'OFFLOGIN';
export const USERID = 'USERID';

export function onlogin(){
    return {
        type: ONLOGIN
    };
}

export function userId(id){
    return {
        type: USERID,
        payload:id
    };
}

export function offlogin(){
    return {
        type: OFFLOGIN
    };
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case ONLOGIN:
            return {
                ...state,
                login:true
            };
        case OFFLOGIN:
            return {
                ...state,
                login:false
            };
        case USERID:
            return {
                ...state,
                userId:action.payload
            }
        default:
            return state;
    }
}