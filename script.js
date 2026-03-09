let passwordInput=document.getElementById("password");

passwordInput.addEventListener("input",checkStrength);

function checkStrength(){

let password=passwordInput.value;

let strength=0;

let bar=document.getElementById("strength-bar");
let result=document.getElementById("result");


if(password.length>=8){

document.getElementById("length").innerHTML="✔ Minimum 8 characters";
document.getElementById("length").style.color="lime";
strength++;

}else{

document.getElementById("length").innerHTML="❌ Minimum 8 characters";
document.getElementById("length").style.color="red";

}


if(/[A-Z]/.test(password)){

document.getElementById("upper").innerHTML="✔ Uppercase letter";
document.getElementById("upper").style.color="lime";
strength++;

}else{

document.getElementById("upper").innerHTML="❌ Uppercase letter";
document.getElementById("upper").style.color="red";

}


if(/[0-9]/.test(password)){

document.getElementById("number").innerHTML="✔ Number";
document.getElementById("number").style.color="lime";
strength++;

}else{

document.getElementById("number").innerHTML="❌ Number";
document.getElementById("number").style.color="red";

}


if(/[!@#$%^&*]/.test(password)){

document.getElementById("special").innerHTML="✔ Special character";
document.getElementById("special").style.color="lime";
strength++;

}else{

document.getElementById("special").innerHTML="❌ Special character";
document.getElementById("special").style.color="red";

}


if(strength<=1){

bar.style.width="25%";
bar.style.background="red";
result.innerHTML="Weak Password";

}

else if(strength==2){

bar.style.width="50%";
bar.style.background="orange";
result.innerHTML="Medium Password";

}

else if(strength==3){

bar.style.width="75%";
bar.style.background="yellow";
result.innerHTML="Strong Password";

}

else if(strength==4){

bar.style.width="100%";
bar.style.background="lime";
result.innerHTML="Very Strong Password";

}

}


function togglePassword(){

let input=document.getElementById("password");

if(input.type==="password"){
input.type="text";
}
else{
input.type="password";
}

}


function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<12;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

passwordInput.value=password;

checkStrength();

}
