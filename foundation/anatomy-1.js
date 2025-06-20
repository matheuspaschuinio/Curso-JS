// Function declaration

function sayHello() {
    console.log('Hello!')
}

sayHello();

function SayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

SayHelloTo('Mike');

function returnHi() {
    return 'Hi!'
}

const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

function returnHiTo(name) {
    return `hi ${name}!`
}

console.log(returnHiTo('John'))