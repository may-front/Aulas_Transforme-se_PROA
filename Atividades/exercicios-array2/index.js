function listaDePresenca() {
  let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
  alunos.forEach((alunos) => {
    console.log(`Presença confirmada: ${alunos}`);
  });
}
// listaDePresenca();

function dobrandoAposta() {
  let valores = [2, 4, 6, 8];
  let valoresDobrados = valores.map((valores) => {
    return valores * 2;
  });
  console.log(valoresDobrados);
}
// dobrandoAposta();

function aprovados() {
  let notas = [5, 8, 4, 9, 7];
  let notasAprovadas = notas.filter((notas) => {
    return notas >= 7;
  });
  console.log(notasAprovadas);
}
// aprovados();

function velocidades() {
  let velocidades = [60, 75, 82, 90, 65];
  let primeiroMultado = velocidades.find((velocidades) => {
    return velocidades > 80;
  });
  console.log(`Multa gerada para a velocidade: ${primeiroMultado}`);
}
// velocidades();
