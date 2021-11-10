const displayReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISPLAY':
            return action.payload;
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
}