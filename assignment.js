function root(a){
    return a ** 0.5;
};
const square = (a) => a * a;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const getWelcomeMessage = (name) => `Hello ${name}!`;
let alertMessage = 'Error'

function nothing(a){
    let r = square(root(a));
    console.log(r)
    // alert('I do nothing!')
};

nothing(9);
console.log(getWelcomeMessage('Cody'))
console.log(multiply(3,5), divide(10,2))