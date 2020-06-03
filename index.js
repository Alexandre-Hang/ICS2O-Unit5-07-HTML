// JavaScript File
var integer1;
var integer2;
var product;
function multiply () {
  product = 0;
  integer1 = Number(document.getElementById("integer1").value);
  integer2 = Number(document.getElementById("integer2").value);
  if (integer2 <= -1)
    while (integer2 < 0) {
      product = product - integer1;
      integer2++;
  }
  else
    while (integer2 > 0) {
      product = integer1 + product;
      integer2--;
  }
  alert ("The product is "+product);
}