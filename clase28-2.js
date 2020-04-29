const API_URL = 'https://api.exchangeratesapi.io/';
const API_LATEST = 'latest';

const exchangeUrl = `${API_URL}${API_LATEST}`;
const opts = { base: 'USD' }

const onExchangeResponse = function(data) {
    var {base, date, rates} = data;
    console.log(`Tipo de cambio para el día ${date}`);
    for(var symbol in rates) {
        var rate = rates[symbol];
        console.log(`1 ${base} equivale a ${rate.toFixed(10)} ${symbol}`);
    }
}

$.get(exchangeUrl, opts, onExchangeResponse);