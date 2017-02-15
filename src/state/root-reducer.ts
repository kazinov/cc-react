import {combineReducers} from 'redux';
import {currencyCalcPageReducer} from '../components/currency-calc/state/currency-calc.page.reducers';
import {currenciesReducer} from './currencies/currencies.reducers';

const rootReducer = combineReducers({
	currencyLinePage: currencyCalcPageReducer,
	currencies: currenciesReducer
});

export default rootReducer;
