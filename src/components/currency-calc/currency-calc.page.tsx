import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { currencyCalcPageActions } from './state/currency-calc.page.actions';
import {IState} from '../../state/initial-state';
import CurrencyLine from './currency-line'
import {ICurrency} from "../../state/currencies/currencies.reducers";

class CurrencyCalcPage extends React.Component<any, any> {
	constructor(props, context) {
		super(props, context);
		this.addLine = this.addLine.bind(this);
		this.onCurrencyLineValueChange = this.onCurrencyLineValueChange.bind(this);
		this.onCurrencyLineCurrencyChange = this.onCurrencyLineCurrencyChange.bind(this);
	}

	addLine(event) {
		event.preventDefault();
		this.props.actions.addCurrencyLine();
	}

	onCurrencyLineValueChange(event, index) {
		event.preventDefault();
		this.props.actions.changeCurrencyLineValue(event.target.value, index);
	}

	onCurrencyLineCurrencyChange(event, index) {
		console.log('onCurrencyLineCurrencyChange', event.target.value, index)
		event.preventDefault();
		this.props.actions.changeCurrencyLineCurrency(event.target.value, index);
	}

	render() {
		const {currencyLines, currencies} = this.props;
		return (
			<div>
				<h2>currency calc page</h2>
				<button
					onClick={this.addLine}>
					Add line
				</button>
				{currencyLines && currencyLines.map((line, i) =>
						<CurrencyLine key={i}
									  line={line}
									  currencies={currencies}
									  onValueChange={($event) => this.onCurrencyLineValueChange($event, i)}
									  onCurrencyChange={($event) => this.onCurrencyLineCurrencyChange($event, i)}></CurrencyLine>
					)}
			</div>
		);
	}
}

function mapStateToProps(state:IState, ownProps) {
	return {
		currencyLines: state.currencyLinePage.currencyLines,
		currencies: state.currencies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(currencyCalcPageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalcPage);
