userString = document.getElementById("string").value;

function countChar(val) {
  var len = document.getElementById("string").value.length;
  document.getElementById("counter").innerHTML = len;
}


// Function to change caret color
function colorChanger() {
  var len = document.getElementById("string").value.length;
  if (len < 50) {
    document.getElementById("string").classList.remove("second_100");
    document.getElementById("string").classList.remove("last_140");
    document.getElementById("string").classList.add("first_50");
  } else if (len > 50 && len < 100) {
    document.getElementById("string").classList.remove("first_50");
    document.getElementById("string").classList.remove("last_140");
    document.getElementById("string").classList.add("second_100");
  } else if (len > 100) {
    document.getElementById("string").classList.remove("first_50");
    document.getElementById("string").classList.remove("second_100");
    document.getElementById("string").classList.add("last_140");
  }
}
