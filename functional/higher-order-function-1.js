function run(fn) {
    return `Result: ${fn()}`
}

function saayHello() {
    console.log('Hello!')
}

run(saayHello)

run(function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)