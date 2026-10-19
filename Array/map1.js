const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10 // A "=>" tem um retorn acoplado nela
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // Função para formatar o número

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)