function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inputNumber = document.getElementById('inputNumber');
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener("click", function() {
        const number = parseInt(inputNumber.value, 10);
        if (!isNaN(number)) {
            result.textContent = `The number ${number} is ${isEvenOrOdd(number)}.`;
        } else {
            result.textContent = 'Please enter a valid number.';
        }
    });
});
