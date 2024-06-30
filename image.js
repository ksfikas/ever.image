function generate_binary_image(width, height, binary_number) {
    var image = new Array(width);

    for (var i = 0; i < height; i++) {
        image[i] = new Array(height);
    }

    var kostas = new ImageData(width,height);

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


    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

    cursorLayer = document.getElementById("binary_image");

    console.log(cursorLayer);

    // below is optional

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fillRect(100, 100, 200, 200);
    ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    ctx.fillRect(150, 150, 200, 200);
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
    ctx.fillRect(200, 50, 200, 200);
}