function InteiroAleatorio (min, max){
    const valor = Math.random() * (min + max) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = InteiroAleatorio(-1 , 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('Até  próxima')