function print_slider_value(input_element, output_element){
    document.getElementById(output_element).innerHTML = document.getElementById(input_element.id).value + "px";
    console.log(document.getElementById(input_element.id).value);
}