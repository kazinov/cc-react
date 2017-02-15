import * as React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './state/configure-store';
import { currenciesActions } from './state/currencies/currencies.actions';


const store = configureStore(undefined);
store.dispatch(currenciesActions.fetchCurrencies());

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

