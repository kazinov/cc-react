import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {currencyCalcPageActions} from './state/currency-calc.page.actions';
import {IState} from '../../state/initial-state';
import CurrencyCalcPage from './currency-calc.page';

class CurrencyCalcPageSmart extends React.Component<any, any> {
	constructor(props, context) {
		super(props, context);

		this.onAddCurrencyLineClick = this.onAddCurrencyLineClick.bind(this);
		this.onCurrencyLineValueChange = this.onCurrencyLineValueChange.bind(this);
		this.onCurrencyLineCurrencyChange = this.onCurrencyLineCurrencyChange.bind(this);
	}

	onAddCurrencyLineClick() {
		this.props.actions.addCurrencyLine();
	}

	onCurrencyLineValueChange(value, index) {
		this.props.actions.changeCurrencyLineValue(value, index);
	}

	onCurrencyLineCurrencyChange(currendyId, index) {
		this.props.actions.changeCurrencyLineCurrency(currendyId, index);
	}

	render() {
		const {currencyLines, currencies} = this.props;
		return (
			<CurrencyCalcPage
				lines={currencyLines}
				currencies={currencies}
				onAddCurrencyLineClick={this.onAddCurrencyLineClick}
				onCurrencyLineValueChange={this.onCurrencyLineValueChange}
				onCurrencyLineCurrencyChange={this.onCurrencyLineCurrencyChange}
			></CurrencyCalcPage>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalcPageSmart);
