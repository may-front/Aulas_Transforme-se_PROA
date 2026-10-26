let semana;
for (semana = 1; semana <= 7; semana++) {
  if (semana == 1 || semana == 7) {
    console.log("Dia " + semana + ": Fim de semana!");
  } else {
    console.log("Dia " + semana + ": Dia útil");
  }
}
