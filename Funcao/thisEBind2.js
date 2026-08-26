function Pessoa() {
    this.idade = 0

    const self = this       //substituindo this por self (ele continua tendo a mesma função)
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa