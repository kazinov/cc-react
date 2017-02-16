import {IReduxAction} from "../index.d";
import {CurrencyRatesActionTypes} from './currency-rates.actions'
import {CurrencyId} from "../currencies/currencies.reducers";
import CurrencyService from "../../services/currency.service";

export interface ICurrencyRate {
	fromId: CurrencyId,
	toId: CurrencyId,
	rate: number
}

export interface ICurrencyRatesMap{
	[id: string] : number;
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

export function currencyRatesMapReducer(state:ICurrencyRatesMap, action:ICurrencyRatesAction):ICurrencyRatesMap {
	if (!state) {
		state = {};
	}

	switch (action.type) {
		case CurrencyRatesActionTypes.CurrencyRatesFetched:
			return action.currencyRates.reduce((map: ICurrencyRatesMap, rate:ICurrencyRate) => {
				map[CurrencyService.getCurrencyMapKey(rate.fromId, rate.toId)] = rate.rate;
				return map;
			}, {});
		default:
			return state;
	}
}