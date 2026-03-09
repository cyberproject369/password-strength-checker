let passwordInput=document.getElementById("password");

passwordInput.addEventListener("input",analyzePassword);

function analyzePassword(){

let password=passwordInput.value;

let strength=0;

let bar=document.getElementById("strength-bar");
let result=document.getElementById("result");
let score=document.getElementById("score");
let entropyText=document.getElementById("entropy");
let crack=document.getElementById("crack");
let warning=document.getElementById("warning");
let terminal=document.getElementById("terminal");

let common=["123456","password","admin","qwerty","111111"];

if(common.includes(password)){
warning.innerHTML="⚠ Common password detected!";
}else{
warning.innerHTML="";
}

if(password.length>=8){
document.getElementById("length").innerHTML="✔ At least 8 characters";
document.getElementById("length").style.color="lime";
strength++;
}else{
document.getElementById("length").innerHTML="❌ At least 8 characters";
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

let securityScore=strength*25;
score.innerHTML="Security Score: "+securityScore+"/100";

let charset=0;
if(/[a-z]/.test(password)) charset+=26;
if(/[A-Z]/.test(password)) charset+=26;
if(/[0-9]/.test(password)) charset+=10;
if(/[!@#$%^&*]/.test(password)) charset+=32;

let entropy=Math.round(password.length*Math.log2(charset||1));
entropyText.innerHTML="Entropy: "+entropy+" bits";

terminal.innerHTML=
"[Scanning password...]\n"+
"[Checking entropy...]\n"+
"[Running attack simulation...]\n"+
"[Analysis complete]";

if(strength<=1){
result.innerHTML="🔴 Weak Password";
bar.style.width="25%";
bar.style.background="red";
crack.innerHTML="Crack time: seconds";
}

else if(strength==2){
result.innerHTML="🟠 Medium Password";
bar.style.width="50%";
bar.style.background="orange";
crack.innerHTML="Crack time: hours";
}

else if(strength==3){
result.innerHTML="🟡 Strong Password";
bar.style.width="75%";
bar.style.background="yellow";
crack.innerHTML="Crack time: years";
}

else if(strength==4){
result.innerHTML="🟢 Very Strong Password";
bar.style.width="100%";
bar.style.background="lime";
crack.innerHTML="Crack time: centuries";
}

}

function togglePassword(){

let input=document.getElementById("password");

if(input.type==="password"){
input.type="text";
}else{
input.type="password";
}

}

function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<14;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

passwordInput.value=password;

analyzePassword();

}
