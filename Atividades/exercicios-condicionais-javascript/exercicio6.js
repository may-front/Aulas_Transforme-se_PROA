let ladoA = 5;
let ladoB = 5;
let ladoC = 7;

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triângulo Equilátero");
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  console.log("Triângulo Escaleno");
} else {
  console.log("Triângulo Isósceles");
}
