import { ActionTypes } from '../actions/action-types';
import {InitialState} from './initial-state';
import {ICurrencyLine} from "./initial-state";
import {IReduxAction} from "./index.d.ts";

export interface ICurrencyLineAction extends IReduxAction {
  currencyLine: ICurrencyLine;
};

export default function currencyLineReducer(state: ICurrencyLine[], action: ICurrencyLineAction): ICurrencyLine[] {
  if (!state) {
    state = InitialState.currencyLines;
  }

  switch (action.type) {
    case ActionTypes.CreateCurrencyLine:
      return [
        ...state,
        {}
      ];
    default:
      return state;
  }
}
