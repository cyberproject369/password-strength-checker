function checkStrength(){

let password=document.getElementById("password").value

let result=document.getElementById("result")
let bar=document.getElementById("strength-bar")

let length=document.getElementById("length")
let uppercase=document.getElementById("uppercase")
let number=document.getElementById("number")
let special=document.getElementById("special")

let strength=0

if(password.length>=8){
length.innerHTML="✅ At least 8 characters"
strength++
}
else{
length.innerHTML="❌ At least 8 characters"
}

if(/[A-Z]/.test(password)){
uppercase.innerHTML="✅ Contains uppercase letter"
strength++
}
else{
uppercase.innerHTML="❌ Contains uppercase letter"
}

if(/[0-9]/.test(password)){
number.innerHTML="✅ Contains number"
strength++
}
else{
number.innerHTML="❌ Contains number"
}

if(/[!@#$%^&*]/.test(password)){
special.innerHTML="✅ Contains special character"
strength++
}
else{
special.innerHTML="❌ Contains special character"
}

if(strength<=1){
result.innerHTML="❌ Weak Password 😟"
bar.style.width="25%"
bar.style.background="red"
}

else if(strength==2){
result.innerHTML="⚠ Medium Password 😐"
bar.style.width="50%"
bar.style.background="orange"
}

else if(strength==3){
result.innerHTML="👍 Good Password 🙂"
bar.style.width="75%"
bar.style.background="yellow"
}

else if(strength==4){
result.innerHTML="💪 Strong Password 🔐"
bar.style.width="100%"
bar.style.background="green"
}

}

function togglePassword(){

let pass=document.getElementById("password")

if(pass.type==="password"){
pass.type="text"
}
else{
pass.type="password"
}

}

function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

let password=""

for(let i=0;i<12;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length))
}

document.getElementById("password").value=password

checkStrength()

}
