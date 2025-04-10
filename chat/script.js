document.getElementById("btnplanning").addEventListener("click", () => {
  document.querySelector(".phone").style.backgroundImage = "url('img/planning.png')";
  document.querySelector("iframe").style.visibility = "hidden";
  document.querySelector(".chatbot").style.visibility = "visible"
});

document.getElementById("btnprofile").addEventListener("click", () => {
  document.querySelector(".chatbot").style.visibility = "hidden"
  document.querySelector("iframe").style.visibility = "hidden";
  document.querySelector(".phone").style.backgroundImage = "url('img/profile.png')";
});

document.querySelector(".chatbot").addEventListener("click", () => {
  document.querySelector("iframe").style.visibility = "visible";
  document.querySelector(".chatbot").style.visibility = "hidden";
});
