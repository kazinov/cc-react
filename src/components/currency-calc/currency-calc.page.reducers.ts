import { CurrencyCalcPageActionTypes } from './currency-calc.page.actions';
import {InitialState} from '../../reducers/initial-state';
import {IReduxAction} from "../../reducers/index.d.ts";
import {combineReducers} from 'redux';

export interface ICurrencyLine {
	value: number;
}

export interface ICurrencyCalcPageState {
	currencyLines: ICurrencyLine[];
}

export interface ICurrencyPageAction extends ICurrencyLinesAction, ICurrencyLineAction { }

export interface ICurrencyLinesAction extends IReduxAction, ICurrencyLineAction {
	currencyLine?: ICurrencyLine;
	index?:number;
}

export interface ICurrencyLineAction extends IReduxAction {
	value?: number;
}

export const currencyCalcPageReducer = combineReducers({
	currencyLines: currencyLinesReducer
});

export function currencyLinesReducer(state:ICurrencyLine[], action:ICurrencyLinesAction):ICurrencyLine[] {
	if (!state) {
		state = InitialState.currencyLinePage.currencyLines;
	}

	switch (action.type) {
		case CurrencyCalcPageActionTypes.AddCurrencyLine:
			return [
				...state,
				{
					value: 0
				}
			];
		case CurrencyCalcPageActionTypes.ChangeCurrencyLineValue:
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
			})
		default:
			return state;
	}
}
