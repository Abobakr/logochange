console.log("2-logo project");

function showLogo() {
  const largeLogo = document.querySelector(".large-logo");
  const smallLogo = document.querySelector(".small-logo");
  if(window.innerWidth > 767){
      largeLogo.style.display='block'; 
      smallLogo.style.display='none'; 
  }
  else{
      largeLogo.style.display='none'; 
      smallLogo.style.display='block'; 
  }

}

// showLogo();
// window.onresize = showLogo;
