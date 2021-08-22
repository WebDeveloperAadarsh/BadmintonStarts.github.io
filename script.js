setInterval(function() {
      console.log("setinterval is working")
    let dest = new Date("Sept 15, 2021 15:00:00").getTime();

      
      
      let d1 = new Date().getTime();


      let diff = dest - d1;


      let days = Math.floor(diff/ (1000
        *60 *60 *24));

      let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("day").innerHTML = `${days}`;

      document.getElementById("hour").innerHTML = `${hrs}`;

      document.getElementById("mins").innerHTML = `${minutes}`;

      document.getElementById("sec").innerHTML = `${seconds}`;
      
      if(seconds < 10){
      document.getElementById("sec").innerHTML = `0${seconds}`;  
      }
      
      
      if(minutes < 10){
      document.getElementById("mins").innerHTML = `0${minutes}`;  
      }
      
    }, 1000);

console.log("hellow world");


 let a = 10;
  
  if(a>89) {
    
  document.getElementById("song").controls.play();
  console.log("succes");
  }

function changeUserName() {

  let btn = document.getElementById("btn");

  let val = document.getElementById("input").value;

  let user = document.getElementById("user");

  user.innerText = val;


  console.log("btn is clicked");
}
let first_div = document.getElementById('first');

let start_btn = document.getElementById('start');

let music = document.getElementById('music');

function start(){
  start_btn.style.display = "none";
  
  first_div.style.display = "none";
  
  music.play();
}
