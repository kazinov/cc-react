import {combineReducers} from 'redux';
import {currencyCalcPageReducer} from '../components/currency-calc/state/currency-calc.page.reducers';
import {currenciesReducer} from './currencies/currencies.reducers';
import {currencyRatesReducer, currencyRatesMapReducer} from './currency-rates/currency-rates.reducers';
import {ICurrencyCalcPageState} from "../components/currency-calc/state/currency-calc.page.reducers";
import {ICurrency} from "./currencies/currencies.reducers";
import {ICurrencyRate} from "./currency-rates/currency-rates.reducers";
import {ICurrencyRatesMap} from "./currency-rates/currency-rates.reducers";

export interface IState {
	currencyLinePage: ICurrencyCalcPageState,
	currencies: ICurrency[],
	currencyRates: ICurrencyRate[],
	currencyRatesMap: ICurrencyRatesMap
}

const rootReducer = combineReducers({
	currencyLinePage: currencyCalcPageReducer,
	currencies: currenciesReducer,
	currencyRates: currencyRatesReducer,
	currencyRatesMap: currencyRatesMapReducer
});

export default rootReducer;
