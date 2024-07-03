function convert_integer_to_binary() {
  var integer_number = document.getElementById('integer_number').value;
  var binary_number = integer_to_binary(integer_number);
  document.getElementById("binary_number").innerHTML = binary_number.toString(2);
  return binary_number.toString(2);
}

function integer_to_binary(integer_number) {
  // return (integer_number >>> 0).toString(2);
  integer_number = BigInt(integer_number);
  return (integer_number).toString(2);
}