function checkStrength(){

let password=document.getElementById("password").value;

let result=document.getElementById("result");

let bar=document.getElementById("strength-bar");

let strength=0;


if(password.length>=8){

document.getElementById("length").style.color="lime";

strength++;

}

else{

document.getElementById("length").style.color="red";

}


if(/[A-Z]/.test(password)){

document.getElementById("upper").style.color="lime";

strength++;

}

else{

document.getElementById("upper").style.color="red";

}


if(/[0-9]/.test(password)){

document.getElementById("number").style.color="lime";

strength++;

}

else{

document.getElementById("number").style.color="red";

}


if(/[!@#$%^&*]/.test(password)){

document.getElementById("special").style.color="lime";

strength++;

}

else{

document.getElementById("special").style.color="red";

}


if(strength==1){

result.innerHTML="🔴 Weak Password (Crack time: seconds)";

bar.style.width="25%";

bar.style.background="red";

}


else if(strength==2){

result.innerHTML="🟡 Medium Password (Crack time: hours)";

bar.style.width="50%";

bar.style.background="orange";

}


else if(strength==3){

result.innerHTML="🟢 Strong Password (Crack time: years)";

bar.style.width="75%";

bar.style.background="yellow";

}


else if(strength==4){

result.innerHTML="💪 Very Strong Password (Crack time: centuries)";

bar.style.width="100%";

bar.style.background="lime";

}

}



function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<12;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("password").value=password;

}



function checkMatch(){

let password=document.getElementById("password").value;

let confirm=document.getElementById("confirm").value;

let match=document.getElementById("match");


if(password===confirm){

match.innerHTML="✔ Passwords Match";

match.style.color="lime";

}

else{

match.innerHTML="✖ Passwords Do Not Match";

match.style.color="red";

}

}
