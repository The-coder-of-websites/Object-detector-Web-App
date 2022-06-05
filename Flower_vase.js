Status="";
Flower_vase_image="";

function preload(){
    Flower_vase_image=loadImage("Flower Vase (2).jpg")
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
    objectDetector.detect(Flower_vase_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Flower_vase_image,0,0,640,350);
}