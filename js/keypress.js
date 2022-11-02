
// event
//var msgE = document.getElementById('message');
//msgE.addEventListener('keyup', showKey);

$('#message').keyup(showKey);
document.addEventListener('mousemove', showPosition);

// event handler
function showKey(e){
    console.log(e.key);
    document.getElementById('lastKey').textContent = "The key is " + e.key;
}

function showPosition(e){
    console.log("The position is " + e.pageX + ", " + e.pageY);
    $('#position').text("The position is " + e.pageX + ", " + e.pageY);
}


const canvas = document.getElementById("play");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(10, 10, 150, 100);

