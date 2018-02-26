// Write your JavaScript here

/* var denoms = {
    dollars: 1,
    quarters: 0.25,
    dimes: 0.1,
    nickels: 0.05,
    pennies: 0.01
}

var coins = [
    'dollars', 'quarters', 'dimes', 'nickels', 'pennies'
]
 */
var aCoins = [
    {coin: 'dollars',  value: 1},
    {coin: 'quarters', value: 0.25},
    {coin: 'dimes',    value: 0.1},
    {coin: 'nickels',  value: 0.05},
    {coin: 'pennies'}
]

function makeChange(due, received) {
    var dollarsOutput = document.getElementById('dollars-output');
    var remaining = (received - due).toFixed(2);
    
    /* var dollars = Math.floor(difference); */
    /* var dollars = ((difference - (difference % 1))/1);
    drawCoins('dollars', difference);
    dollarsOutput.innerHTML = dollars; */

    aCoins.forEach(function(i) {
        var elem =       document.getElementById(i.coin + '-output');
        if ( i.value ) {
            elem.innerHTML = doChange(remaining, i.value);
            drawCoins(i.coin, doChange(remaining, i.value));
        } else {
            // pennies don't like rounding
            elem.innerHTML = (remaining.toFixed(2)) * 100;
            drawCoins(i.coin, (remaining.toFixed(2) * 100));
        }
        /* var amount =     doChange(remaining, i.value);
        elem.innerHTML = amount; */
        remaining %= i.value;
        /* remaining =      (remaining - (amount * i.value)).toFixed(2); */
    });
    
    /* for (i=0; i<coins.length; i++) {
        var elem = document.getElementById(coins[i] + '-output');
        var amount = doChange(remaining, denoms[coins[i]]);
        elem.innerHTML = amount;
        remaining -= doChange(remaining, denoms[coins[i]]) * denoms[coins[i]];
        remaining = remaining.toFixed(2);

        drawCoins(coins[i], amount);
    } */
}

function doChange(amount, denom) {
    /* var output = Math.floor(amount / denom); */
    var output = ((amount - (amount % denom))/denom);
    return output;
}

function doCalc() {
    var due = document.getElementById('amount-due').value;
    var received = document.getElementById('amount-received').value;
    makeChange(due, received);
}

function clickEvent() {
    var calcButton = document.getElementById('calculate-change');
    calcButton.addEventListener('click', function() {
        doCalc();
    })
}

function drawCoins(coin, number) {
    var coinSpace = document.getElementById(coin + '-img');
    var newThing = document.createElement('span');
    var content = '<img src="img/' + coin + '.png" />';
    coinSpace.innerHTML = '';
    newThing.innerHTML = content.repeat(number);
    coinSpace.appendChild(newThing);
}

clickEvent();