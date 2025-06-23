function bomDia() {
    console.log('Bom Dia!!!')
}

const boaTarde = function() {
    console.log('Boa Tarde!!!')
}

// Passar uma função  como param para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potencia34 = potencia(3)(4)
console.log(potencia34)