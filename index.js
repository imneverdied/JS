function changeColor() {
  var elem = document.getElementById('para');
  var newColor=elem.style.color;

  if(newColor=='blue')
  {newColor='red'
  }
  else
  {newColor='blue'}
  
  elem.style.color = newColor;

}
function cColor(value) {
  var elem = document.getElementById('para');
  
  elem.style.color = value;
  elem.innerHTML=value;

}
