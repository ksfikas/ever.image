function create_canvas(width, height) {
    var canvas = document.getElementById('binary_image');
    if (canvas != null)
        canvas.remove();

    canvas = document.createElement('canvas');

    canvas.id = "binary_image";
    canvas.width = width;
    canvas.height = height;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";

    var body = document.getElementById("pills-generate-image");
    body.appendChild(canvas);
    // cursorLayer = document.getElementById("binary_image");
    return canvas;
}

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function fit_data_to_image(binary_number, width, height) {
    binary_number = binary_number.padEnd(width * height * 4, '0');
    binary_number = binary_number.substring(0, width * height * 4);
    return binary_number;
}

function binary_to_imagedata(binary_number) {
    return binary_number.split('').map(function(s){return s+s+s+1}).join('');
}

function generate_binary_image() {
    
    var width = document.getElementById("horizontal_lines").value;
    var height = document.getElementById("vertical_lines").value;
    var content = document.getElementById("binary_number").innerHTML;
    content = fit_data_to_image(content, width, height);
    buffer = new Uint8ClampedArray(parseInt(BigInt(content)));



    canvas = create_canvas(width, height);
    ctx = canvas.getContext("2d")
    imgData = ctx.createImageData(width, height);
    imgData.data.set(buffer);

    ctx.putImageData(imgData, 0, 0);
    
}