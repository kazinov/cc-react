import {combineReducers} from 'redux';
import {currencyCalcPageReducer} from '../components/currency-calc/state/currency-calc.page.reducers';
import {currenciesReducer} from './currencies/currencies.reducers';
import {currencyRatesReducer} from './currency-rates/currency-rates.reducers';
import {ICurrencyCalcPageState} from "../components/currency-calc/state/currency-calc.page.reducers";
import {ICurrency} from "./currencies/currencies.reducers";

export interface IState {
	currencyLinePage: ICurrencyCalcPageState,
	currencies: ICurrency[]
}

const rootReducer = combineReducers({
	currencyLinePage: currencyCalcPageReducer,
	currencies: currenciesReducer,
	currencyRates: currencyRatesReducer
});

export default rootReducer;
