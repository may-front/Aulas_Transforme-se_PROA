let bateria = 100;

console.log("Bateria " + bateria + "%");

while (bateria > 0) {
  bateria = bateria - 20;
  if (bateria == 100) {
    console.log("Bateria 100%");
  } else if (bateria <= 20 && bateria > 0) {
    console.log("Bateria fraca: " + bateria + "%");
  } else {
    console.log("Bateria: " + bateria + "%");
  }
  if (bateria == 0) {
    console.log("Celular desligado");
  }
}
