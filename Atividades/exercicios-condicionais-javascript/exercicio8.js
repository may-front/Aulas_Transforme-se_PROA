let peso = 65;
let altura = 1.58;
let IMC = peso / (altura * altura);

console.log("RESULTADO: Seu IMC é " + IMC.toFixed(2));

if (IMC < 18.5) {
  console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
  console.log("Peso normal");
} else if (IMC >= 25 && IMC <= 29.9) {
  console.log("Sobrepeso");
}
