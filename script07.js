let metaLivros = 5;

let livrosLidos = ["A seleção", "Jogos de herança", "Os primos"];

console.log("Seus livros lidos");
    for (let i = 0; i <livrosLidos.length; i++){
        console.log(`- ${livrosLidos[i]}`);
    }

    if (livrosLidos.length >= metaLivros){
        console.log("Parabéns! Você atingiu sua meta de leitura!");
    }else { console.log (`Você está progredindo! Faltam ${metaLivros - livrosLidos.length} livros para atingir sua meta.`);
}
        

