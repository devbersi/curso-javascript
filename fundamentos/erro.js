function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e){
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}
throw {
   erro: 'Ops ocorreu um ERRO!'
 // THROW ACEITA QUALQUER TIPO DE CÓDIGO SENDO ELE STRING OBJ ARRAY BOOLEAN QUALQUER TIPO MEMSMO
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)