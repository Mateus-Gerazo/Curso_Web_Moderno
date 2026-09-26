// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

// Congelando objetos
Object.freeze(pessoa)
pessoa.nome = 'Maria' // Não consigo alterar pois está congelado
pessoa.end = 'Rua ABC' // Não consigo alterar pois está congelado
delete pessoa.nome // Não consigo deletar pois está congelado

console.log(pessoa.nome)
console.log(pessoa)

// cria um objeto constante
const pessoaConstante = Object.freeze({ nome: 'João', idade: 20 })

pessoaConstante.nome = 'Maria' // Não consigo alterar pois está congelado
console.log(pessoaConstante)