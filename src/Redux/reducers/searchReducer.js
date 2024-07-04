const searchReducer = (state = '', action) => {

    if (action.type === 'searched') {
        console.log(action.payload,'222222222222222222');
        return action.payload;
    }

    return state; 
};

export default searchReducer;
