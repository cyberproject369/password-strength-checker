let password=document.getElementById("password");
let confirm=document.getElementById("confirm");

password.addEventListener("input",checkStrength);
confirm.addEventListener("input",checkMatch);

function checkStrength(){

let pass=password.value;

let strength=0;

let result=document.getElementById("result");

let bar=document.getElementById("strength-bar");


if(pass.length>=8){

document.getElementById("length").innerHTML="✔ At least 8 characters";
document.getElementById("length").style.color="lime";
strength++;

}else{

document.getElementById("length").innerHTML="❌ At least 8 characters";
document.getElementById("length").style.color="red";

}


if(/[A-Z]/.test(pass)){

document.getElementById("upper").innerHTML="✔ Contains uppercase letter";
document.getElementById("upper").style.color="lime";
strength++;

}else{

document.getElementById("upper").innerHTML="❌ Contains uppercase letter";
document.getElementById("upper").style.color="red";

}


if(/[0-9]/.test(pass)){

document.getElementById("number").innerHTML="✔ Contains number";
document.getElementById("number").style.color="lime";
strength++;

}else{

document.getElementById("number").innerHTML="❌ Contains number";
document.getElementById("number").style.color="red";

}


if(/[!@#$%^&*]/.test(pass)){

document.getElementById("special").innerHTML="✔ Contains special character";
document.getElementById("special").style.color="lime";
strength++;

}else{

document.getElementById("special").innerHTML="❌ Contains special character";
document.getElementById("special").style.color="red";

}


if(strength<=1){

result.innerHTML="🔴 Weak Password";
bar.style.width="25%";
bar.style.background="red";

}

else if(strength==2){

result.innerHTML="🟡 Medium Password";
bar.style.width="50%";
bar.style.background="orange";

}

else if(strength==3){

result.innerHTML="🟢 Strong Password";
bar.style.width="75%";
bar.style.background="yellow";

}

else if(strength==4){

result.innerHTML="💪 Very Strong Password";
bar.style.width="100%";
bar.style.background="lime";

}

}


function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let pass="";

for(let i=0;i<12;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length));

}

password.value=pass;

checkStrength();

}


function checkMatch(){

let match=document.getElementById("match");

if(password.value===confirm.value){

match.innerHTML="✔ Passwords Match";
match.style.color="lime";

}else{

match.innerHTML="❌ Passwords Do Not Match";
match.style.color="red";

}

}
