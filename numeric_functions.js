function convert_integer_to_binary() {
  var integer_number = document.getElementById('integer_number').value;
  var binary_number = int2bin(integer_number);
  document.getElementById("binary_number").innerHTML = binary_number.toString(2);
  return binary_number.toString(2);
}

function int2bin(integer_number) {
  return (integer_number >>> 0).toString(2);
}