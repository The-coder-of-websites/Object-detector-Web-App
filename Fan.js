Status="";
Fan_image="";

function preload(){
    Fan_image=loadImage("Fan.jpg")
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(Fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Fan_image,0,0,640,350);
}