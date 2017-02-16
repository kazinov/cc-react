import {IReduxAction} from "../index.d";
import {CurrencyRatesActionTypes} from './currency-rates.actions'

export interface ICurrencyRate {
	fromId: string,
	toId: string,
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