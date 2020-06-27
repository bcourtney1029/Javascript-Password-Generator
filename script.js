let generateButton = document.getElementById("generate");
let passLength = document.getElementById("slider");
let passComplex = document.getElementById("choice");
let output = document.getElementById("length");
  output.innerHTML = "Password length: " + slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Password length: " + this.value;
}

function generate() {
  let passL = document.getElementById("slider").value;
  let passC = document.getElementById("choice").value;
  let password = "";
  
  if (passC == 1) {
    var values = "abcdefghijklmnopqrstuvwxyz";    
  }
  if (passC == 2) {
    var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passC == 3) {
    var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  }
  if (passC == 4) {
    var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
  }
  
  for (var i = 0; i < passL; i++) {
    password += values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("password").value = password;
  
}


// Assignment Code
var generateBtn = document.querySelector("#generate");









