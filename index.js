var lista = [];


document.addEventListener("keydown", function(event){
  sendName(event.key);
  });

  document.querySelector(".sortear").addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    var participantes = lista.length;
    var randomPersonPosition = Math.floor(Math.random() * participantes);
    var randomPerson = lista[randomPersonPosition];

    document.querySelector(".sorteado").innerHTML = "O sorteado foi: " + "<strong>" + randomPerson + "</strong>";
    document.querySelector(".sorteado").classList.remove("invisivel");

  });
  document.querySelector(".randomizar").addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
      for (let i = lista.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lista[i], lista[j]] = [lista[j], lista[i]];
      }
      for(i = 0; i<lista.length;i++){
    document.querySelectorAll(".item")[i].innerHTML = lista[i];
      }

    document.querySelector(".sorteado").classList.add("invisivel");
  });
  document.querySelector(".resetar").addEventListener("click", function() {
   var buttonInnerHtml = this.innerHTML;
   lista = [];
   for(i = 0; i<11;i++){
       document.querySelectorAll(".item")[i].innerHTML = lista[i];
       document.querySelectorAll(".item")[i].classList.add("invisivel");
   }
     document.querySelector(".sorteado").classList.add("invisivel");
  });

function sendName(key){
  switch (key) {
    case "Enter":
  if(lista.length < 11){
  var nome = document.querySelector(".participantes").value;
  lista.push(nome);
  document.querySelector(".participantes").value = null;
  console.log(lista);
  var index = lista.indexOf('');
  if ( index > -1) {
  lista.splice(index, 1);
}
  for(i = 0; i<lista.length;i++){
      document.querySelectorAll(".item")[i].innerHTML = lista[i];
      document.querySelectorAll(".item")[i].classList.remove("invisivel");
  }
}else{
  alert("Não é possível adicionar mais nomes");
  document.querySelector(".participantes").classList.add("invisivel");
}
    break;
    default:
    null;
  }
}
