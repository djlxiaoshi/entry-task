import { combineReducers } from 'redux';
import DetailsReducer from '../page/Details/store/reducer';
import HomeReducer from '../page/Home/store/reducer';

export default combineReducers({
    home: HomeReducer,
    details: DetailsReducer
});
