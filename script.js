document.getElementById("menu-icon").addEventListener("click", function () {

  const navMenu = document.getElementById("menu");


  menu.classList.toggle("hidden");
});

document
  .getElementById("calculadora-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const ope1 = parseFloat(document.getElementById("txt_operador1").value);
    const ope2 = parseFloat(document.getElementById("txt_operador2").value);
    const operacion = document.getElementById("sel_operacion").value;
    
    let calculo = 0.0;
    if (operacion == "+") {
      calculo = ope1 + ope2;
    } else if (operacion == "-") {
      calculo = ope1 - ope2;
    } else if (operacion == "*") {
      calculo = ope1 * ope2;
    } else if (operacion == "/") {
      if (ope2 != 0) 
        calculo = ope1 / ope2;
      else 
        calculo = "Error: división por 0"
    } 

  document.getElementById("lb_resultado").textContent =
    "Resultado: " + calculo;
  });

function fibonacci(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  let a = 0n, b = 1n;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

document.getElementById("fibonacci-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const n = parseInt(document.getElementById("txt_fibonacci").value);

  if (isNaN(n) || n < 0) {
    document.getElementById("lb_fibonacci").textContent = "Ingrese un número válido (>=0).";
    return;
  }

  const resultado = fibonacci(n);
  document.getElementById("lb_fibonacci").textContent = "F(" + n + ") = " + resultado.toString();
});
