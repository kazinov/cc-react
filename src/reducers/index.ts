import {combineReducers} from 'redux';
import {currencyCalcPageReducer} from '../components/currency-calc/currency-calc.page.reducers';

const rootReducer = combineReducers({
	currencyLinePage: currencyCalcPageReducer
});

export default rootReducer;
