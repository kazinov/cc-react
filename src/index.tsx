import * as React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './state/configure-store';
import { currenciesActions } from './state/currencies/currencies.actions';
import { currencyRatesActions } from './state/currency-rates/currency-rates.actions';

const store = configureStore(undefined);

store.dispatch(currenciesActions.fetchCurrencies());
store.dispatch(currencyRatesActions.fetchCurrencyRates());

store.subscribe(() => {
		console.log('store', store.getState());
	}
)

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);

