function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light") //clicando no botão para trocar a versão dark e light

  
  const img = document.querySelector("#profile img") 

  if(html.classList.contains("light")){
    
    img.setAttribute('src', './assets/avatar-light.png') 
    img.setAttribute('alt', 'Foto de Bruna Guirra de óculos de grau, usando uma camiseta preta') 
  } else{
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Bruna Guirra de óculos de grau, usando uma camiseta cinza") 
  }



}