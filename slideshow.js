var currentArt = 0;
var myArt = new Array();
var delay = 4000;
var counter = 0;

for (var i = 0; i < 3; i++){
    myArt[i] = new Image();
    myArt[i].src = 'Images/sw' + (i + 1) + '.png';
}

function setImg(){
    document.getElementById("art").src = myArt[i].src;
}

function prev(){
    if (i<=0) i = myArt.length;
    i--;
    counter++;
    return setImg();
}

function next(){
    if (i >= myArt.length - 1) i = -1;
    i++;
    counter++;
    return setImg();
}

function animate() {
    if (counter == 0){
        if(i >= myArt.length - 1) i = -1;
        i++;
        setTimeout("animate()", delay);
        return setImg();
    }else{
        counter = 0;
    }
    setTimeout("animate()", delay);
}

function choseSW(totalArt){
    myArt = new Array();
    for (var i = 0; i < totalArt; i++){
        myArt[i] = new Image();
        myArt[i].src = 'Images/sw' + (i + 1) + '.png';
    }
    
}

function choseIllust(totalArt){
    myArt = new Array();
    for (var i = 0; i < totalArt; i++){
        myArt[i] = new Image();
        myArt[i].src = 'Images/illust' + (i + 1) + '.png';
    }
    
}

function choseCA(totalArt){
    myArt = new Array();
    for (var i = 0; i < totalArt; i++){
        myArt[i] = new Image();
        myArt[i].src = 'Images/ca' + (i + 1) + '.png';
    }
    
}

function chose3D(totalArt){
    myArt = new Array();
    for (var i = 0; i < totalArt; i++){
        myArt[i] = new Image();
        myArt[i].src = 'Images/3d' + (i + 1) + '.png';
    }
    
}

function choseSketch(totalArt){
    myArt = new Array();
    for (var i = 0; i < totalArt; i++){
        myArt[i] = new Image();
        myArt[i].src = 'Images/sketch' + (i + 1) + '.png';
    }
    
}


