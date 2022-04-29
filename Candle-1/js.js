/*PLAY SOUND
function getSound(call_us) {
  var sound = document.getElementById(call_us);
  sound.volume = 1;
  if (sound.paused) {
      sound.play();
  } else {
      sound.pause();
  }
}
function getSound(call_us) {
  var audio = document.getElementById("call_us");
  audio.getSound(call_us)
}
*/

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}



/*ANIMATION OF CANDLE*/
function candleOn() {
  document.getElementById("img1").src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9193d483500913.5d3ecfc94f929.gif"
}
function candleOff() {
  document.getElementById("img1").src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ab9dc83500913.5d3ecfc94f25a.png"
}

/*Change style*/
document.getElementById("img1").style.alignItems="stretch";

