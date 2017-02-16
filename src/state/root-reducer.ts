import {combineReducers} from 'redux';
import {currencyCalcPageReducer} from '../components/currency-calc/state/currency-calc.page.reducers';
import {currenciesReducer} from './currencies/currencies.reducers';
import {currencyRatesReducer} from './currency-rates/currency-rates.reducers';

const rootReducer = combineReducers({
	currencyLinePage: currencyCalcPageReducer,
	currencies: currenciesReducer,
	currencyRates: currencyRatesReducer
});

export default rootReducer;
