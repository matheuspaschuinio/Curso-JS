// somar(3)(4)(5)

function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
    return function(y) {
        return function(fn)  {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function adicionar(a, b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

const r1 = calcular(4)(3)(multiplicar)
console.log(r1)

const r2 = calcular(4)(3)(dividir)
console.log(r2)

const r3 = calcular(4)(3)(adicionar)
console.log(r3)

const r4 = calcular(4)(3)(subtrair)
console.log(r4)