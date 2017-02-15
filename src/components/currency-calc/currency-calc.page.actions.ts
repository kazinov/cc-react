export const CurrencyCalcPageActionTypes = {
	AddCurrencyLine: 'currency-calc-page:add-currency-line',
	ChangeCurrencyLineValue: 'currency-calc-page:change-currency-line-value',
	ChangeCurrencyLineCurrency: 'currency-calc-page:change-currency-line-currency'
};
export const currencyCalcPageActions = {
	addCurrencyLine: () => ({ type: CurrencyCalcPageActionTypes.AddCurrencyLine }),
	changeCurrencyLineValue: (value: number, index: number) =>
			({
				type: CurrencyCalcPageActionTypes.ChangeCurrencyLineValue,
				value: value,
				index: index
			}),
	changeCurrencyLineCurrency: (currencyId: string, index: number) =>
			({
				type: CurrencyCalcPageActionTypes.ChangeCurrencyLineCurrency,
				currencyId: currencyId,
				index: index
			})
}
