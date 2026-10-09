class Avo {
    constructor(sobrenome) {
        this.nome = nome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)