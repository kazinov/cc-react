import * as React from 'react';
import {ICurrencyLine} from "./state/currency-calc.page.reducers";
import {ICurrency} from "../../state/currencies/currencies.reducers";

interface ICurrencyLineParams {
	line: ICurrencyLine,
	currencies: ICurrency[];
	onValueChange: any,
	onCurrencyChange: any,
}
const CurrencyLine = (params:ICurrencyLineParams) => {
	return (
		<div>
			<input type="number"
				   value={params.line.value}
				   onChange={params.onValueChange}/>
			<select value={params.line.currencyId}
					onChange={params.onCurrencyChange}>
				{params.currencies.map((currency: ICurrency, i) =>
				<option key={i} value={currency.id}>{currency.name}</option>
					)}
			</select>
		</div>
	);
};

export default CurrencyLine;
