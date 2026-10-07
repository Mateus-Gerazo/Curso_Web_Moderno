function Aula(nome, videoID) {
    this.nome = nome
    this.videoId = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) {
    const obj = {} // criando um objeto vazio
    obj.__proto__ = f.prototype // definindo o protótipo de obj como f.prototype
    f.apply(obj, params) // aplicando os parâmetros de f em obj
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)