import {combineReducers} from 'redux';
import {restaurantReducer} from './restaurantReducer';

export const reducers = combineReducers({
    restaurant: restaurantReducer,
});
