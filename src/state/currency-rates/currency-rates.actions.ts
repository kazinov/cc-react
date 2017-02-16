import {ICurrencyRatesAction} from "./currency-rates.reducers";
import {ICurrencyRate} from "./currency-rates.reducers";
import {CurrencyId} from "../currencies/currencies.reducers";

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
		fromId: <CurrencyId>'usd',
		toId: <CurrencyId>'euro',
		rate: 0.96
	},
	{
		fromId: <CurrencyId>'euro',
		toId: <CurrencyId>'usd',
		rate: 1.04
	},
	{
		fromId: <CurrencyId>'usd',
		toId: <CurrencyId>'rub',
		rate: 60.98
	},
	{
		fromId: <CurrencyId>'rub',
		toId: <CurrencyId>'usd',
		rate: 0.016
	},
	{
		fromId: <CurrencyId>'rub',
		toId: <CurrencyId>'euro',
		rate: 0.016
	},
	{
		fromId: <CurrencyId>'euro',
		toId: <CurrencyId>'rub',
		rate: 63.71
	}
];