import {ICurrencyUnit} from "../components/currency-calc/state/currency-calc.page.reducers";
import {CurrencyId} from "../state/currencies/currencies.reducers";
import {ICurrencyRate} from "../state/currency-rates/currency-rates.reducers";
import {ICurrencyRatesMap} from "../state/currency-rates/currency-rates.reducers";

export default class CurrencyService {
	static calcCurrencySum(units: ICurrencyUnit[], sumCurrencyId: CurrencyId, currencyRatesMap: ICurrencyRatesMap): number {
		return units.reduce((sum: number, unit: ICurrencyUnit) => {
			if (unit.currencyId === sumCurrencyId) {
				return sum += unit.value;
			}

			let rate = currencyRatesMap[CurrencyService.getCurrencyMapKey(unit.currencyId, sumCurrencyId)];
			if (rate) {
				sum += (unit.value*rate);
			}
			return sum;
		}, 0);
	}

	static getCurrencyMapKey(from: CurrencyId, to: CurrencyId) {
		return `${from}:${to}`;
	}
}