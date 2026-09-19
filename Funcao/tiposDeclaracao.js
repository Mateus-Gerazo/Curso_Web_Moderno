console.log(soma(3, 4)) // o JS consegue executar mesmo a declaração estando abaixo da chamada.
console.log(sub(3, 4)) // o JS não consegue executar, pois a declaração está abaixo da chamada.
console.log(mult(3, 4)) // o JS consegue executar, pois a declaração está abaixo da chamada.

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}