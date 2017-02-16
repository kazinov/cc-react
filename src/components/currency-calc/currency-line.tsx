import * as React from 'react';
import {ICurrencyLine} from "./state/currency-calc.page.reducers";
import {ICurrency} from "../../state/currencies/currencies.reducers";
import CurrencyDropdown from "./currency-dropdown";

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
			<CurrencyDropdown
					currencyId={params.line.currencyId}
					onCurrencyChange={params.onCurrencyChange}
					currencies={params.currencies}
			></CurrencyDropdown>
		</div>
	);
};

export default CurrencyLine;
