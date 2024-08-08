let armas = ["laser", "super soco", "míssil", "super velocidade", "chute potente", "espada"];

let ataques = [];

ataques.push("robo FM");
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[5]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`O nome do seu robo é: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i} | ${ataques[i]}`);
    }
}