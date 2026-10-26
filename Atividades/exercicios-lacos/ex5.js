let carga = 0;

while (carga <= 100) {
  console.log("Carga atual: " + carga + " kg");
  carga = carga + 30;
  if (carga >= 100) {
    console.log("100kg: Limite atingido!");
  }
}
