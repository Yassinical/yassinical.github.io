const phoneElement = document.querySelector(".phone");
const iframeElement = document.querySelector("iframe");
const chatbotElement = document.querySelector(".chatbot");

const appImages = {
  planning: new Image(),
  profile: new Image()
};

window.addEventListener('load', function() {
  appImages.planning.src = 'img/planning.png';
  appImages.profile.src = 'img/profile.png';
  
  appImages.planning.onload = function() {
    console.log('Planning image loaded');
  };
  appImages.profile.onload = function() {
    console.log('Profile image loaded');
  };
});

document.getElementById("btnplanning").addEventListener("click", () => {
  phoneElement.style.backgroundImage = `url('${appImages.planning.src}')`;
  iframeElement.style.visibility = "hidden";
  chatbotElement.style.visibility = "visible";
});

document.getElementById("btnprofile").addEventListener("click", () => {
  chatbotElement.style.visibility = "hidden";
  iframeElement.style.visibility = "hidden";
  phoneElement.style.backgroundImage = `url('${appImages.profile.src}')`;
});

chatbotElement.addEventListener("click", () => {
  iframeElement.style.visibility = "visible";
  chatbotElement.style.visibility = "hidden";
});
