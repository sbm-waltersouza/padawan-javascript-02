var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = (peso / altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);