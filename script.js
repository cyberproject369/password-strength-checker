let passwordInput=document.getElementById("password")

passwordInput.addEventListener("input",analyzePassword)

function analyzePassword(){

let password=passwordInput.value

let strength=0

let bar=document.getElementById("strength-bar")
let result=document.getElementById("result")
let score=document.getElementById("score")
let entropyText=document.getElementById("entropy")
let crack=document.getElementById("crack")
let warning=document.getElementById("warning")

checkRules(password)

simulateAttack()

let common=["123456","password","admin","qwerty","111111"]

if(common.includes(password)){
warning.innerHTML="⚠ Common password detected!"
}else{
warning.innerHTML=""
}

if(password.length>=8) strength++
if(/[A-Z]/.test(password)) strength++
if(/[0-9]/.test(password)) strength++
if(/[!@#$%^&*]/.test(password)) strength++

let securityScore=strength*25
score.innerHTML="Security Score: "+securityScore+"/100"

let charset=0
if(/[a-z]/.test(password)) charset+=26
if(/[A-Z]/.test(password)) charset+=26
if(/[0-9]/.test(password)) charset+=10
if(/[!@#$%^&*]/.test(password)) charset+=32

let entropy=Math.round(password.length*Math.log2(charset||1))
entropyText.innerHTML="Entropy: "+entropy+" bits"

if(strength<=1){
result.innerHTML="🔴 Weak Password"
bar.style.width="25%"
bar.style.background="red"
crack.innerHTML="Crack time: seconds"
}

else if(strength==2){
result.innerHTML="🟠 Medium Password"
bar.style.width="50%"
bar.style.background="orange"
crack.innerHTML="Crack time: hours"
}

else if(strength==3){
result.innerHTML="🟡 Strong Password"
bar.style.width="75%"
bar.style.background="yellow"
crack.innerHTML="Crack time: years"
}

else if(strength==4){
result.innerHTML="🟢 Very Strong Password"
bar.style.width="100%"
bar.style.background="lime"
crack.innerHTML="Crack time: centuries"
}

}

function checkRules(password){

let length=document.getElementById("length")
let upper=document.getElementById("upper")
let number=document.getElementById("number")
let special=document.getElementById("special")

length.innerHTML=password.length>=8?"✔ At least 8 characters":"❌ At least 8 characters"
length.style.color=password.length>=8?"lime":"red"

upper.innerHTML=/[A-Z]/.test(password)?"✔ Uppercase letter":"❌ Uppercase letter"
upper.style.color=/[A-Z]/.test(password)?"lime":"red"

number.innerHTML=/[0-9]/.test(password)?"✔ Number":"❌ Number"
number.style.color=/[0-9]/.test(password)?"lime":"red"

special.innerHTML=/[!@#$%^&*]/.test(password)?"✔ Special character":"❌ Special character"
special.style.color=/[!@#$%^&*]/.test(password)?"lime":"red"

}

function simulateAttack(){

let terminal=document.getElementById("terminal")

let lines=[
"[Scanning password...]",
"[Checking entropy...]",
"[Running brute force simulation...]",
"[Testing dictionary attack...]",
"[Security analysis complete]"
]

terminal.innerHTML=""

let i=0

let interval=setInterval(function(){

terminal.innerHTML+=lines[i]+"\n"

i++

if(i>=lines.length) clearInterval(interval)

},400)

}

function togglePassword(){

let input=document.getElementById("password")

input.type=input.type==="password"?"text":"password"

}

function generatePassword(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

let password=""

for(let i=0;i<14;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length))
}

passwordInput.value=password

analyzePassword()

}

function copyPassword(){

navigator.clipboard.writeText(passwordInput.value)

alert("Password copied")

}
