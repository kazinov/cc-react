import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { currencyLineActions } from '../../actions/currency-line-actions';
import {IState} from "../../reducers/initial-state";

class CurrencyCalcPage extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context);
    this.addLine = this.addLine.bind(this);
  }

  addLine(event) {
    event.preventDefault();
    this.props.actions.createCurrencyLine()
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
          <div key={i}>{'line' + i}</div>
              )}
        </div>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    currencyLines: state.currencyLines
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currencyLineActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCalcPage);
