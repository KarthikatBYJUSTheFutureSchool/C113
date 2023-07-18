function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
   
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
 

function draw(){
    rect(25, 90, 55, 55);
    ellipse(56, 46, 55, 55);
    circle(76, 76, 20);
    
}