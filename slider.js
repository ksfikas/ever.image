function print_slider_value(input, output){
    document.getElementById(output).innerHTML = document.getElementById(input.id).value;
    console.log(document.getElementById(input.id).value);
}