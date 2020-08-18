let valor //nao inicializada
console.log(valor)

valor =  null // ausencia de valor
console.log(valor) // sermpre use 'null' para zerar uma variavel
//console.log(valor.toString()) //ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto.preco)