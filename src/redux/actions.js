export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_DATA = 'SET_DATA';
export const SET_PRODUCT_BASKET = 'SET_PRODUCT_BASKET';


export const setIsLoading = isLoading => dispatch => {
    dispatch({
        type: SET_IS_LOADING,
        payload: isLoading,
    });
};

export const setData = data => dispatch => {
    dispatch({
        type: SET_DATA,
        payload: data,
    });
};

export const setProductBasket = productBasket => dispatch => {
    dispatch({
        type: SET_PRODUCT_BASKET,
        payload: productBasket,
    });
};

