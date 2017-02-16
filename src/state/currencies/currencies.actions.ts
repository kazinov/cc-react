import {ICurrenciesAction} from "./currencies.reducers";
import {ICurrency, CurrencyId} from "./currencies.reducers";

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
		id: <CurrencyId>'rub',
		name: <CurrencyId>'rub'
	},
	{
		id: <CurrencyId>'usd',
		name: <CurrencyId>'usd'
	},
	{
		id: <CurrencyId>'euro',
		name: <CurrencyId>'euro'
	}
];