function vascomior() {
  // Get the value of the input field with id="numb"
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  var media = (a+b+c) / 3 ;
  // If x is Not a Number or less than one or greater than 10
  var text;
  if (isNaN(a) ||isNaN(b) || isNaN(c) ||  a <= 0 || b <= 0 || c <= 0 ) {
    text = "Digite Valores validos";
  } else {
    text = "Resultado: " + media;
  }
  document.getElementById("RECEBA").innerHTML = text;
}