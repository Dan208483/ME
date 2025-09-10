document.getElementById("menu-icon").addEventListener("click", function () {
  const navMenu = document.getElementById("menu");
  navMenu.classList.toggle("show");
});

document
  .getElementById("calculadora-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const ope1 = parseFloat(document.getElementById("txt_operador1").value);
    const ope2 = parseFloat(document.getElementById("txt_operador2").value);
    const operacion = document.getElementById("sel_operacion").value;

    if (isNaN(ope1) || isNaN(ope2)) {
      document.getElementById("lb_resultado").textContent =
        "Ingrese números válidos.";
      return;
    }
    
    let calculo;
    if (operacion == "+") {
      calculo = ope1 + ope2;
    } else if (operacion == "-") {
      calculo = ope1 - ope2;
    } else if (operacion == "*") {
      calculo = ope1 * ope2;
    } else if (operacion == "/") {
      calculo = ope2 !== 0 ? ope1 / ope2 : "Error: división por 0"
    }

    document.getElementById("lb_resultado").textContent = calculo;
  });

function fibonacciSecuencia(n) {
  let secuencia = [];
  if (n >= 0) secuencia.push(0);
  if (n >= 1) secuencia.push(1);

  for (let i = 2; i <= n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i -2]);
  }
  return secuencia;
}

document.getElementById("fibonacci-form")
 .addEventListener("submit", function(e) {
   e.preventDefault();
   const n = parseInt(document.getElementById("txt_fibonacci").value);

  if (isNaN(n) || n < 0) {
    document.getElementById("lb_fibonacci").textContent = 
      "Ingrese un número válido (>=0).";
    return;
  }

  const secuencia = fibonacciSecuencia(n);
  const valor = secuencia[n];
  document.getElementById("lb_fibonacci").textContent = `F(${n}) = ${valor}`;
});
