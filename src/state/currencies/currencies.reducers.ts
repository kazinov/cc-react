import {IReduxAction} from "../index.d";
import {InitialState} from '../initial-state';
import {CurrenciesActionTypes} from './currencies.actions'

export interface ICurrency {
	id: string,
	name: string
}

export interface ICurrenciesAction extends IReduxAction {
}

export function currenciesReducer(state:ICurrency[], action:ICurrenciesAction):ICurrency[] {
	if (!state) {
		state = InitialState.currencies;
	}

	switch (action.type) {
		case CurrenciesActionTypes.FetchCurrencies:
			return [
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
		default:
			return state;
	}
}