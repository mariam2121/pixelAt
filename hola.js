let matriz = [];
let valor = 0;

for (let i = 0; i < 10; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(valor);
    valor++;
  }
  matriz.push(fila);
}

for (let i = 0; i < 10; i++) {
  console.log(matriz[i]);
  }