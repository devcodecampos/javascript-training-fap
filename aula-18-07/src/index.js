const prompt = require('prompt-sync')()
const mean = require('./utils/mean')

let option
do {
  console.log(`
MATEMÁTICA

(4) Média Aritmética
(0) Sair`)

  option = Number.parseInt(prompt('Escolha uma opção: '))
  console.log(option)

  switch (option) {
    case 4:
      let arrayNumbers = []
      let option
      do {
        console.log(`
        \nMÉDIA ARITMÉTICA - Número escolhidos:[${arrayNumbers}]
        (1) Informar número
        (2) Calcular
        (0) Voltar
        `)

        option = Number.parseInt(prompt('Escolha uma opção: '))
        if (option === 1) {
          arrayNumbers.push(Number.parseInt(prompt('Informe um número: ')))
        } else if (option === 2) {
          if (!arrayNumbers.length) {
            console.log('Nenhum valor foi informado')
            continue
          }

          console.log('A média aritmética é: ' + mean(arrayNumbers))
          arrayNumbers = []
        } else if (option !== 0) {
          console.log('Informe uma opção disponível')
        }
      } while (option !== 0)
      break
    default:
      console.log('Informe uma opção disponível')
  }


} while (option !== 0)