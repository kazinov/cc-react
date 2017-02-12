export interface ICurrencyLine {

}

export interface IState {
  currencyLines: ICurrencyLine[];
}

export const InitialState: IState = {
  currencyLines: []
};
