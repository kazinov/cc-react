import {ICurrencyCalcPageState} from "../components/currency-calc/state/currency-calc.page.reducers";
import {ICurrency} from "./currencies/currencies.reducers";

export interface IState {
  currencyLinePage: ICurrencyCalcPageState,
  currencies: ICurrency[]
}

export const InitialState: IState = {
  currencyLinePage: {
    currencyLines: []
  },
  currencies: []
};
