import axios from "axios";
export const FETCH_DATA_FAILURE="FETCH_DATA_FAILURE";
export const FETCH_DATA_ON_SUCCESS="FETCH_DATA_ON_SUCCESS";
export const ADD_NEW_USER_DETAILS="ADD_NEW_USER_DETAILS";
export const ADD_NEW_USER_DETAILS_FAILED="ADD_NEW_USER_DETAILS_FAILED";
export const DELETE_USER_SUCCESS="DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE="DELETE_USER_FAILURE";
export const USER_SELECTED="USER_SELECTED";
export const ADD_TO_CART_DETAILS="ADD_TO_CART_DETAILS";


const types={
    FETCH_DATA_ON_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_NEW_USER_DETAILS,
    ADD_NEW_USER_DETAILS_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    USER_SELECTED,
    ADD_TO_CART_DETAILS
};
const InitialState={
  data:{},
    users:[],
    userSelect:[],
    cartItems:[],
    cartTotal:0
};

export function searchRequestReducer(state=InitialState, action){
    switch(action.type){
        case types.FETCH_DATA_ON_SUCCESS:
            return {
                ...state,
                data:action.data,
                users:action.data.users
            };
        case ADD_NEW_USER_DETAILS:
            return state;
        case ADD_NEW_USER_DETAILS_FAILED:
            return state;
        case DELETE_USER_SUCCESS:
            return state;
        case DELETE_USER_FAILURE:
            return state;
        case USER_SELECTED:
            return {
                ...state,
              userSelect:action.payload
            };
        case ADD_TO_CART_DETAILS:
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload],
                cartTotal:parseFloat(state.cartTotal)+parseFloat(action.payload.price)
            };
        default:
            return state;
    }
}export function searchRequest() {
    return function (dispatch) {
        axios.get("/api")
            .then((response) => dispatch({
                type: types.FETCH_DATA_ON_SUCCESS,
                data: response.data
            }), (error) => dispatch({
                type: types.FETCH_DATA_FAILURE,
                Error: response.error
            }))
    }
}
export function addToCartActions(obj) {
    console.log(obj);
    return function (dispatch){
          dispatch({
                type: types.ADD_TO_CART_DETAILS,
                payload:obj
            })
        }
}



