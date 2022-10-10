
// External Java Script File
// Get Elements - Get the Text
let spanE = document.getElementById('num1')
let spanT = spanE.textContent;
let n1 = parseInt(spanT);

let n2 = parseInt(document.getElementById('num2').textContent);

// add numbers
let s = n1 + n2;

// display results
document.write(s);