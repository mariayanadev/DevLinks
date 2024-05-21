function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img =
    document.querySelector(
      "#profile img"
    ) /*Argumento do seletor que está no CSS

  //CHAMANDO A FUNÇÃO TOOGLE DO JS*/
  //Substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode - adicionar image light - setAttribute: adicionar, ajustar, modificar um atribuito
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  //se não tiver light mode - tirar image light
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

//CRIANDO A FUNÇÃO
//if (html.classList.contains("light"))
//html.classList.remove("light")
//else {
//html.classList.add("light")
//}
