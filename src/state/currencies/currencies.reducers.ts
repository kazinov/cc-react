import {IReduxAction} from "../index.d";
import {CurrenciesActionTypes} from './currencies.actions'

export type CurrencyId = 'rub' | 'euro' | 'usd';

export interface ICurrency {
	id: CurrencyId,
	name: string
}

export interface ICurrenciesAction extends IReduxAction {
	currencies?: ICurrency[];
}

export function currenciesReducer(state:ICurrency[], action:ICurrenciesAction):ICurrency[] {
	if (!state) {
		state = [];
	}

	switch (action.type) {
		case CurrenciesActionTypes.CurrenciesFetched:
			return [
				...action.currencies
			];
		default:
			return state;
	}
}