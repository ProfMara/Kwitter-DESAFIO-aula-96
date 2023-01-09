//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

