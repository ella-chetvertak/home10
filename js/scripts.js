    // First

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        setTimeout(() => console.log(this.message), 3000) 
    },
};
coffeeMachine.start()
let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
};
coffeeMachine.start = coffeeMachine.start.bind(teaPlease);
coffeeMachine.start();

    // Second

function concatStr(...args) {
    return args.reduce((acc, currentValue) => (acc += currentValue), '');  
}
let checkConcat = concatStr('Hello', ' ', 'Matt');
console.log(checkConcat);
let hello = concatStr.bind(null, 'Hello ');
let finalResult = hello('Matt');
console.log(finalResult);

    // Third

function showNumbers(range1, range2, timeout) {
    console.log(range1)
    range1 += 1;
    if (range1 === range2 + 1) return;
    setTimeout(showNumbers, timeout, range1, range2, timeout);
}
showNumbers(5, 10, 1000);

    // Fourth

function addBase(base) {
    return function (num) {
        return base + num;
    };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3));
// В alert будет значение 10, потому что в переменной addOne содержится внутренняя функция addBase с аргументом base внешней, соотвестсвенно она будет выполняться, тк base = 1 получится 6 + 4 = 10 
