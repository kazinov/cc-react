import {combineReducers} from 'redux';
import currencyLineReducer from './currency-line.reducer';

const rootReducer = combineReducers({
	currencyLines: currencyLineReducer
});

export default rootReducer;
