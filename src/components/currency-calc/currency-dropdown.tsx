import * as React from 'react';
import {ICurrency, CurrencyId} from "../../state/currencies/currencies.reducers";

interface ICurrencyDropdownParams {
	currencyId: CurrencyId,
	currencies: ICurrency[];
	onCurrencyChange: any,
}
const CurrencyDropdown = (params:ICurrencyDropdownParams) => {
	return (
		<select value={params.currencyId}
				onChange={params.onCurrencyChange}>
			{params.currencies.map((currency: ICurrency, i) =>
			<option key={i} value={currency.id}>{currency.name}</option>
				)}
		</select>
	);
};

export default CurrencyDropdown;
