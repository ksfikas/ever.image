function integer_to_binary(integer_number) {
    return (integer_number >>> 0).toString(2);
}

function doSomething() {
  var integer_number = document.getElementById('integer_number').value;
  var binary_number = integer_to_binary(integer_number);
  // alert(binary_number.toString(2));
  document.getElementById("binary_number").innerHTML = binary_number.toString(2);
  return binary_number.toString(2);
}