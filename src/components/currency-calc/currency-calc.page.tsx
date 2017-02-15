import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { currencyCalcPageActions } from './currency-calc.page.actions';
import {IState} from "../../reducers/initial-state";

class CurrencyCalcPage extends React.Component<any, any> {
	constructor(props, context) {
		super(props, context);
		this.addLine = this.addLine.bind(this);
		this.onCurrencyLineValueChange = this.onCurrencyLineValueChange.bind(this);
	}

	addLine(event) {
		event.preventDefault();
		this.props.actions.addCurrencyLine();
	}

	onCurrencyLineValueChange(event, index) {
		event.preventDefault();
		this.props.actions.changeCurrencyLineValue(event.target.value, index);
	}

	render() {
		const {currencyLines} = this.props;
		return (
			<div>
				<h2>currency calc page</h2>
				<button
					onClick={this.addLine}>
					Add line
				</button>
				{currencyLines && currencyLines.map((line, i) =>
				<div key={i}>
					<input type="number"
						   value={line.value}
						   onChange={($event) => this.onCurrencyLineValueChange($event, i)}/>
				</div>
					)}
			</div>
		);
	}
}

function mapStateToProps(state:IState, ownProps) {
	return {
		currencyLines: state.currencyLinePage.currencyLines
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(currencyCalcPageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalcPage);
