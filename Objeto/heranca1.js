const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // __proto__ é uma referência para o protótipo do objeto
console.log(ferrari.__proto__ === Object.prototype) // __proto__ é igual ao Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // __proto__ é igual a null

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto) // typeof Object é 'function', typeof MeuObjeto é 'function' também
    console.log(Object.prototype, MeuObjeto.prototype) // Object.prototype é o protótipo de todos os objetos, MeuObjeto.prototype é o protótipo de todos os objetos criados com new MeuObjeto()
}

MeuObjeto()