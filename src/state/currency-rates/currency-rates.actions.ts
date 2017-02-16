import {ICurrencyRatesAction} from "./currency-rates.reducers";
import {ICurrencyRate} from "./currency-rates.reducers";
export const CurrencyRatesActionTypes = {
	CurrencyRatesFetched: 'currency-rates-fetched'
};
export const currencyRatesActions = {
	fetchCurrencyRates: fetchCurrencyRates,
	currencyRatesFetched: currencyRatesFetched
}

export function fetchCurrencyRates() {
	return function (dispatch, getState) {
		dispatch(currencyRatesFetched(DummyCurrencyRates));
	}
}

export function currencyRatesFetched(currencyRates:ICurrencyRate[]):ICurrencyRatesAction {
	return {
		type: CurrencyRatesActionTypes.CurrencyRatesFetched,
		currencyRates: currencyRates
	};
}

let DummyCurrencyRates = [
	{
		fromId: 'usd',
		toId: 'euro',
		rate: 0.96
	},
	{
		fromId: 'euro',
		toId: 'usd',
		rate: 1.04
	},
	{
		fromId: 'usd',
		toId: 'rub',
		rate: 60.98
	},
	{
		fromId: 'rub',
		toId: 'usd',
		rate: 0.016
	},
	{
		fromId: 'rub',
		toId: 'euro',
		rate: 0.016
	},
	{
		fromId: 'euro',
		toId: 'rub',
		rate: 63.71
	}
];