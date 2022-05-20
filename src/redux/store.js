const initialState = {
    login:false
};

export const ONLOGIN = 'ONLOGIN';
export const OFFLOGIN = 'OFFLOGIN';

export function onlogin(){
    return {
        type: ONLOGIN
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
        default:
            return state;
    }
}