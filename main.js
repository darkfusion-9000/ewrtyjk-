function preload() {
    
}
function setup() {
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
 video.hide();


 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses)
}

function modelLoaded(){
console.log('poseNet is initialized');
}
function gotPoses(results) {
 if (results.length > 0) {
     console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
 }   
}
function draw() {
Image(video,0,0,500,500);

}
function take_snapshot() {
save('mr duck.png ')
}

