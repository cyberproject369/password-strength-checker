<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cyber Security Password Strength Checker</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h2>Cyber Security Password Checker</h2>

<div class="input-box">
<input type="password" id="password" placeholder="Enter Password" onkeyup="checkStrength()">
<button onclick="togglePassword()">Show</button>
</div>

<div class="strength-meter">
<div id="strength-bar"></div>
</div>

<p id="result"></p>

<div class="requirements">
<p id="length">✗ At least 8 characters</p>
<p id="uppercase">✗ Contains uppercase letter</p>
<p id="number">✗ Contains number</p>
<p id="special">✗ Contains special character</p>
</div>

<button onclick="generatePassword()">Generate Strong Password</button>

<h3>Security Tips</h3>

<ul>
<li>✓ Use 8+ characters</li>
<li>✓ Use uppercase and lowercase letters</li>
<li>✓ Use numbers and special symbols</li>
<li>✓ Avoid common passwords</li>
</ul>

</div>

<script src="script.js"></script>

</body>
</html>
