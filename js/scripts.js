$(document).ready(function() {
  var height = parseInt(prompt("What is height in feet?"));
  
  if (height > 5) {
  $('#tall-rides').show();
  } else if (height === 5) {
  $('#medium-rides').show();
  } else {
  $('#short-rides').show();
}
});