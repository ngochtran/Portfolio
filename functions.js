var currentFrame = 0;
var num = 6;
var myImages = new Array();
var delay = 150;
var image = document.getElementById("base");

for (var i = 0; i < 6; i++){
    myImages[i] = new Image();
    myImages[i].src = 'Images/base' + (i + 1) + '.png';
}

function animate() {
    document.getElementById("base").src = myImages[currentFrame].src;
    currentFrame++;
        if (currentFrame >= num){
            currentFrame = 0;
        }
    setTimeout("animate()", delay);
}

function showImage(uri) {
    document.getElementById("hover").src = uri;
}