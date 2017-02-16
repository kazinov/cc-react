import { CurrencyCalcPageActionTypes } from './currency-calc.page.actions';
import {IReduxAction} from "../../../state/index.d.ts";
import {combineReducers} from 'redux';
import {CurrencyId} from "../../../state/currencies/currencies.reducers";

export interface ICurrencyLine {
	value: number;
	currencyId: string;
}

export interface ICurrencyCalcPageState {
	currencyLines: ICurrencyLine[];
	sumCurrencyId: CurrencyId
}

export interface ICurrencyPageAction extends ICurrencyLinesAction, ICurrencyLineAction {
	currencyId?: CurrencyId;
}

export interface ICurrencyLinesAction extends IReduxAction, ICurrencyLineAction {
	currencyLine?: ICurrencyLine;
	index?:number;
}

export interface ICurrencyLineAction extends IReduxAction {
	value?: number;
	currencyId?: CurrencyId;
}

export const defaultCurrencyId: CurrencyId = <CurrencyId>'euro';
export const currencyCalcPageReducer = combineReducers({
	currencyLines: currencyLinesReducer,
	sumCurrencyId: sumCurrencyReducer
});

export function currencyLinesReducer(state:ICurrencyLine[], action:ICurrencyLinesAction):ICurrencyLine[] {
	if (!state) {
		state = [];
	}

	switch (action.type) {
		case CurrencyCalcPageActionTypes.AddCurrencyLine:
			return [
				...state,
				{
					value: 0,
					currencyId: defaultCurrencyId
				}
			];
		case CurrencyCalcPageActionTypes.ChangeCurrencyLineValue:
			return state.map((line: ICurrencyLine, index) => {
				if (index === action.index) {
					return currencyLineReducer(line, action);
				}
				return line;
			});
		case CurrencyCalcPageActionTypes.ChangeCurrencyLineCurrency:
			return state.map((line: ICurrencyLine, index) => {
				if (index === action.index) {
					return currencyLineReducer(line, action);
				}
				return line;
			});
		default:
			return state;
	}
}

export function currencyLineReducer(state:ICurrencyLine, action:ICurrencyLineAction):ICurrencyLine {
	switch (action.type) {
		case CurrencyCalcPageActionTypes.ChangeCurrencyLineValue:
			return Object.assign({}, state, {
				value: action.value
			});
		case CurrencyCalcPageActionTypes.ChangeCurrencyLineCurrency:
			return Object.assign({}, state, {
				currencyId: action.currencyId
			});
		default:
			return state;
	}
}

export function sumCurrencyReducer(state:CurrencyId, action:ICurrencyPageAction):CurrencyId {
	if (!state) {
		state = defaultCurrencyId;
	}

	switch (action.type) {
		case CurrencyCalcPageActionTypes.ChangeSumCurrency:
			return action.currencyId;
		default:
			return state;
	}
}