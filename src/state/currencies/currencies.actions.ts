export const CurrenciesActionTypes = {
	FetchCurrencies: 'fetch-currencies'
};
export const currenciesActions = {
	fetchCurrencies: () => ({ type: CurrenciesActionTypes.FetchCurrencies })
}
