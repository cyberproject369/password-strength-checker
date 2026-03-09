function checkStrength(){

let password = document.getElementById("password").value
let result = document.getElementById("result")

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

if(strength <= 1){
result.innerHTML = "Weak Password"
result.style.color = "red"
}

else if(strength == 2 || strength == 3){
result.innerHTML = "Medium Password"
result.style.color = "orange"
}

else{
result.innerHTML = "Strong Password"
result.style.color = "green"
}

}