const initialState = []


export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }

};

export default cartReducer;
