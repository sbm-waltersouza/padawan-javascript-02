var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function() {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    
    paiDoAlvo.remove();

});