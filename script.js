const name1 = prompt("insira o nome de um personagem")
const power = parseInt(prompt('qual o poder de ataque do seu peronagem?'))

const name2 = prompt('Qual o nome do outro personagem?')
const life = parseInt(prompt('Quantos pontos de vida ele tem?'))
const shield = prompt('Ele tem um escudo?')
const defense = prompt('Qual a defesa do outro personagem')

if (shield == 'sim' && power > defense) {
    alert(`${name1} atacou. ${name2} sofreu ${(power - defense)/2} de dano por possuir escudo. Sua vida agora é ${life - ((power - defense)/2)}.`)
} else if (defense == 'não' && power > defense) {
    alert(`${name1} atacou. ${name2} sofreu ${power - defense} de dano e não possui escudo. Sua vida agora é ${life - (power - defense)}`)
} else {
    alert(`${name1} atacou, mas não afetou ${name2}. Nenhum dano causado!`)
  }
