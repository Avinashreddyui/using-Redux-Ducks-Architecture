/**
 * Created by avvinash on 8/20/2017.
 */
import { combineReducers } from 'redux';
import * as search from "../searchDucks/SearchDucksReducer"

export default combineReducers({
    search:search.searchRequestReducer
});