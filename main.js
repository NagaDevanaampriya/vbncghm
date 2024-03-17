noseX = 0;
noseY= 0;

function preload(){
    lipstick = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialzed");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
   noseX= results[0].pose.nose.x-10;
   noseY = results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    image(lipstick, noseX,noseY,20,20);
}
function take_snapshot(){
    save("myFilterPic.png");

}


