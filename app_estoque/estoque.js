var produtos = []

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adcionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id
    });
}

module.exports = {
    criarProduto,
    adcionarProduto,
    listarProdutos,
    removerProduto
}