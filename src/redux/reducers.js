import { SET_IS_LOADING,SET_DATA ,SET_PRODUCT_BASKET} from './actions';

const initialState = {
    isLoading: true,
    data:[],
    productBasket:[],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        case SET_PRODUCT_BASKET:
            return { ...state, productBasket: action.payload };

        default:
            return state;
    }
}

export default userReducer;