const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! (remove o último elemento)

console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento ao final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento ao final do array
console.log(pilotos)

// splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // massa quebrou :(

const algunsPilotos1 = pilotos.slice(2) // Gera um novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Gera um novo array a partir do indice 1 até o indice 4 (não incluso)
console.log(algunsPilotos2)

console.log('Os pilotos são:', pilotos)
