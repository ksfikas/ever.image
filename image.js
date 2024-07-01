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

    cursorLayer = document.getElementById("binary_image");

    console.log(cursorLayer);
}




function generate_binary_image(width, height, binary_number) {
    var image = new Array(width);

    for (var i = 0; i < height; i++) {
        image[i] = new Array(height);
    }

    var kostas = new ImageData(width,height);

    create_canvas(width, height);    
}