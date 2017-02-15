import {ICurrencyCalcPageState} from "../components/currency-calc/currency-calc.page.reducers";

export interface IState {
  currencyLinePage: ICurrencyCalcPageState
}

export const InitialState: IState = {
  currencyLinePage: {
    currencyLines: []
  }
};
