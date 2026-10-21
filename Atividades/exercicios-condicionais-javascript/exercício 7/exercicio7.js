let numero1 = Number(prompt("Insira o 1º número: "));
let operador = prompt("Insira o operador (são aceitos: +, -, * e /)");
let numero2 = Number(prompt("Insira o 2º número: "));

switch (operador) {
  case "+":
    alert(numero1 + numero2);
    break;
  case "-":
    alert(numero1 - numero2);
    break;
  case "*":
    alert(numero1 * numero2);
    break;
  case "/":
    if (operador == "/" && numero2 !== 0) {
      alert(numero1 / numero2);
    } else {
      alert("O segundo número não pode ser 0!");
    }
    break;
}
