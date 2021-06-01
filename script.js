const Button = document.querySelectorAll("btn");
const counter = document.querySelector("");

increaseButton.addEventListener("mouseover",

    function() {
        const CounterInteger = parseInt(counter.innerHTML)
        const increaseValue = CounterInteger + 1;
        counter.innerHTML = increaseValue;
    });
resetButton.addEventListener("click", function() {
    const CounterInteger = parseInt(counter.innerHTML)
    const resetInterger = CounterInteger 0;
    counter.innerHTML = resetValue;
});
decreaseButton.addEventListener("mouseover", function() {
    const CounterInteger = parseInt(counter.innerHTML)
    const decreaseInteger = CounterInteger - 1;
    counter.innerHTML = decreaseValue;
});