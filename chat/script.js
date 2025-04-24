window.addEventListener('load', function() {
  const imagesToPreload = [
    'img/planning.png',
    'img/profile.png'
  ];
  
  imagesToPreload.forEach(url => {
    const img = new Image();
    img.src = url;
  });
});


document.getElementById("btnplanning").addEventListener("click", () => {
  //document.querySelector(".phone").style.backgroundImage = "url('img/planning.png')";
  document.querySelector(".phone").style.backgroundImage = bgImages[0];
  document.querySelector("iframe").style.visibility = "hidden";
  document.querySelector(".chatbot").style.visibility = "visible"
});

document.getElementById("btnprofile").addEventListener("click", () => {
  document.querySelector(".chatbot").style.visibility = "hidden"
  document.querySelector("iframe").style.visibility = "hidden";
  document.querySelector(".phone").style.backgroundImage = bgImages[1];
});

document.querySelector(".chatbot").addEventListener("click", () => {
  document.querySelector("iframe").style.visibility = "visible";
  document.querySelector(".chatbot").style.visibility = "hidden";
});
