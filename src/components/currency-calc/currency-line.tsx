import * as React from 'react';
import {ICurrencyLine} from "./state/currency-calc.page.reducers";
import {ICurrency} from "../../state/currencies/currencies.reducers";
import CurrencyDropdown from "./currency-dropdown";

interface ICurrencyLineProps {
	line: ICurrencyLine,
	currencies: ICurrency[];
	onValueChange: any,
	onCurrencyChange: any,
}
const CurrencyLine = (props:ICurrencyLineProps) => {
	return (
		<div>
			<input type="number"
				   value={props.line.value}
				   onChange={props.onValueChange}/>
			<CurrencyDropdown
					currencyId={props.line.currencyId}
					onCurrencyChange={props.onCurrencyChange}
					currencies={props.currencies}
			></CurrencyDropdown>
		</div>
	);
};

export default CurrencyLine;
