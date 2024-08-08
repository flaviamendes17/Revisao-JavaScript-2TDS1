let paes = ["Pão Australiano", "Pão Brioche🍔", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburguer = [];

hamburguer.push(paes[1]);
hamburguer.push(molhos[0]);
hamburguer.push(saladas[1]);
hamburguer.push(carnes[1]);
hamburguer.push(queijos[2]);
hamburguer.push(queijos[2]);


for (let i = 0; i < hamburguer.length; i++){ //primeiro passo do for é o "i"
console.log(hamburguer[i]);
}