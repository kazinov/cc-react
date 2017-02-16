import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {currencyCalcPageActions} from './state/currency-calc.page.actions';
import {IState} from '../../state/root-reducer';
import CurrencyCalcPage from './currency-calc.page';
import CurrencyService from "../../services/currency.service";

class CurrencyCalcPageSmart extends React.Component<any, any> {
	constructor(props, context) {
		super(props, context);

		this.onAddCurrencyLineClick = this.onAddCurrencyLineClick.bind(this);
		this.onCurrencyLineValueChange = this.onCurrencyLineValueChange.bind(this);
		this.onCurrencyLineCurrencyChange = this.onCurrencyLineCurrencyChange.bind(this);
		this.onSumCurrencyChange = this.onSumCurrencyChange.bind(this);
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

	onSumCurrencyChange(currendyId) {
		this.props.actions.changeSumCurrency(currendyId);
	}

	render() {
		const {currencyLines, currencies, sumCurrencyId, sum} = this.props;
		return (
			<CurrencyCalcPage
				lines={currencyLines}
				currencies={currencies}
				sum={sum}
				sumCurrencyId={sumCurrencyId}
				onSumCurrencyChange={this.onSumCurrencyChange}
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
		sumCurrencyId: state.currencyLinePage.sumCurrencyId,
		currencies: state.currencies,
		sum: CurrencyService.calcCurrencySum(
				state.currencyLinePage.currencyLines,
				state.currencyLinePage.sumCurrencyId,
				state.currencyRatesMap)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(currencyCalcPageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalcPageSmart);
