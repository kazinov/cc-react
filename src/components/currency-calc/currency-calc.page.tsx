import * as React from 'react';
import CurrencyLine from './currency-line'
import {ICurrency, CurrencyId} from "../../state/currencies/currencies.reducers";
import {ICurrencyLine} from "./state/currency-calc.page.reducers";
import CurrencyDropdown from "./currency-dropdown";

interface ICurrencyCalcPageProps {
	lines: ICurrencyLine[],
	currencies: ICurrency[];
	sum: number,
	sumCurrencyId: CurrencyId,
	onAddCurrencyLineClick: any;
	onCurrencyLineValueChange: any,
	onCurrencyLineCurrencyChange: any,
	onSumCurrencyChange: any
}

class CurrencyCalcPage extends React.Component<any, any> {
	constructor(props: ICurrencyCalcPageProps, context) {
		super(props, context);
		this.onAddCurrencyLineClick = this.onAddCurrencyLineClick.bind(this);
		this.onCurrencyLineValueChange = this.onCurrencyLineValueChange.bind(this);
		this.onCurrencyLineCurrencyChange = this.onCurrencyLineCurrencyChange.bind(this);
		this.onSumCurrencyChange = this.onSumCurrencyChange.bind(this);
	}

	onAddCurrencyLineClick(event) {
		event.preventDefault();
		this.props.onAddCurrencyLineClick();
	}

	onCurrencyLineValueChange(event, index) {
		event.preventDefault();
		this.props.onCurrencyLineValueChange(event.target.value, index);
	}

	onCurrencyLineCurrencyChange(event, index) {
		event.preventDefault();
		this.props.onCurrencyLineCurrencyChange(event.target.value, index);
	}

	onSumCurrencyChange(event) {
		event.preventDefault();
		this.props.onSumCurrencyChange(event.target.value);
	}

	render() {
		const {lines, currencies, sumCurrencyId, sum} = this.props;
		return (
			<div>
				<h2>currency calc page</h2>
				<button
					onClick={this.onAddCurrencyLineClick}>
					Add line
				</button>
				{lines.map((line, i) =>
						<CurrencyLine key={i}
									  line={line}
									  currencies={currencies}
									  onValueChange={($event) => this.onCurrencyLineValueChange($event, i)}
									  onCurrencyChange={($event) => this.onCurrencyLineCurrencyChange($event, i)}></CurrencyLine>
					)}
				<div>
					Sum: {sum}
					<CurrencyDropdown
							currencyId={sumCurrencyId}
							onCurrencyChange={this.onSumCurrencyChange}
							currencies={currencies}
					></CurrencyDropdown>
				</div>
			</div>
		);
	}
}

export default CurrencyCalcPage;