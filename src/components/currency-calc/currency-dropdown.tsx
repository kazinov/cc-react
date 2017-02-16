import * as React from 'react';
import {ICurrency, CurrencyId} from "../../state/currencies/currencies.reducers";

interface ICurrencyDropdownProps {
	currencyId: CurrencyId,
	currencies: ICurrency[];
	onCurrencyChange: any,
}
const CurrencyDropdown = (props:ICurrencyDropdownProps) => {
	return (
		<select value={props.currencyId}
				onChange={props.onCurrencyChange}>
			{props.currencies.map((currency: ICurrency, i) =>
			<option key={i} value={currency.id}>{currency.name}</option>
				)}
		</select>
	);
};

export default CurrencyDropdown;
