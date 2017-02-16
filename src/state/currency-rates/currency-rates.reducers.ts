import {IReduxAction} from "../index.d";
import {CurrencyRatesActionTypes} from './currency-rates.actions'
import {CurrencyId} from "../currencies/currencies.reducers";

export interface ICurrencyRate {
	fromId: CurrencyId,
	toId: CurrencyId,
	rate: number
}

export interface ICurrencyRatesAction extends IReduxAction {
	currencyRates?: ICurrencyRate[];
}

export function currencyRatesReducer(state:ICurrencyRate[], action:ICurrencyRatesAction):ICurrencyRate[] {
	if (!state) {
		state = [];
	}

	switch (action.type) {
		case CurrencyRatesActionTypes.CurrencyRatesFetched:
			return [
				...action.currencyRates
			];
		default:
			return state;
	}
}