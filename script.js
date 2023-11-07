const items = document.querySelectorAll('.item');
const coins = document.querySelectorAll('.coin');
const refundButton = document.querySelector('.refund');
const message = document.getElementById('message');
let total = 0;

items.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));

        if (total >= price) {
            total -= price;
            message.textContent = 'You bought Enjoy!';
        } else {
            message.textContent = 'Not enough money inserted.';
        }

        document.getElementById('total').textContent = total.toFixed(2);
    });
});

coins.forEach(coin => {
    coin.addEventListener('click', () => {
        const value = parseFloat(coin.getAttribute('data-value'));
        total += value;
        document.getElementById('total').textContent = total.toFixed(2);
    });
});

refundButton.addEventListener('click', () => {
    total = 0;
    document.getElementById('total').textContent = '0.00';
    message.textContent = 'Coins refunded.';
});




  