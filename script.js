function checkStrength(){

let password = document.getElementById("password").value
let result = document.getElementById("result")
let bar = document.getElementById("strength-bar")

let strength = 0

if(password.length >= 8){
strength++
}

if(/[A-Z]/.test(password)){
strength++
}

if(/[0-9]/.test(password)){
strength++
}

if(/[!@#$%^&*]/.test(password)){
strength++
}

if(strength == 1){
result.innerHTML="Weak Password"
bar.style.width="25%"
bar.style.background="red"
}

else if(strength == 2){
result.innerHTML="Medium Password"
bar.style.width="50%"
bar.style.background="orange"
}

else if(strength == 3){
result.innerHTML="Good Password"
bar.style.width="75%"
bar.style.background="yellow"
}

else if(strength == 4){
result.innerHTML="Strong Password"
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
