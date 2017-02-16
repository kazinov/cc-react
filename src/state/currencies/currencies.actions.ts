import {ICurrenciesAction} from "./currencies.reducers";
import {ICurrency} from "./currencies.reducers";

export const CurrenciesActionTypes = {
	CurrenciesFetched: 'currencies-fetched'
};
export const currenciesActions = {
	fetchCurrencies: fetchCurrencies,
	currenciesFetched: currenciesFetched
}

export function fetchCurrencies() {
	return function (dispatch, getState) {
		dispatch(currenciesFetched(DummyCurrencies));
	}
}

export function currenciesFetched(currencies:ICurrency[]):ICurrenciesAction {
	return {
		type: CurrenciesActionTypes.CurrenciesFetched,
		currencies: currencies
	};
}

let DummyCurrencies = [
	{
		id: 'rub',
		name: 'rub'
	},
	{
		id: 'usd',
		name: 'usd'
	},
	{
		id: 'euro',
		name: 'euro'
	}
];