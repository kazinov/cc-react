import * as React from 'react';
import {ICurrencyLine} from "./currency-calc.page.reducers";

interface ICurrencyLineParams {
	line: ICurrencyLine,
	onValueChange: any
}
const CurrencyLine = (params: ICurrencyLineParams) => {
	return (
		<div>
			<input type="number"
				   value={params.line.value}
				   onChange={params.onValueChange}/>
		</div>
	);
};

export default CurrencyLine;
