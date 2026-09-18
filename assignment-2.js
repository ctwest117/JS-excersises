// Circle area function
function getCircleArea(radius){
    return (radius * radius) * Math.PI;
}

console.log(getCircleArea(6))

// random password
let passwordChar = [];
let password;
let letters = ['a','b','c','d','e','f','g',
                'h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u',
                'v','w','x','y','z'];
let numbers = [0,1,2,3,4,5,6,7,8,9,0]
let symbols = ['!','$','&','@']

let keys = [letters, numbers, symbols]
function randKey(){
    let group = keys[Math.floor(Math.random()*keys.length)]
    return group[Math.floor(Math.random() * group.length)]
};
const randSymbol = () => symbols[Math.random()*10];

const randCap = (letter) =>  typeof letter === 'string' && Math.random() < 0.5 ? letter.toUpperCase() : letter;

function randPassword(){
    for (let i = 0; i < 8; i++) {
        passwordChar.push(randCap(randKey()))
    };
    // this is code from codex. i could have made a long if else and made it work,
    // so i still could have done this without ai, this way is just faster
    if(!symbols.some((symbol) => passwordChar.includes(symbol))){
        passwordChar[Math.floor(Math.random()*3)] = randSymbol()
    }
    password = passwordChar.join("")
}

randPassword()
console.log(password)

// Sales tax
let getSalesTax = (price , tax) => price * (tax / 100) + price;
console.log(getSalesTax(145,7))
