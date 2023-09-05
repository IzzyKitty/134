function setup(){
canvas=createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status: detecting objects"
}

function draw(){
if(status1!=""){
image(image1,0,0,640,420)
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:object detected"
fill("#8000ff")
percent=floor(objects[0].confidence*100)
text(objects[0].label+""+percent+"%",objects[0].x,objects[0].y)
noFill()
stroke("#8000ff")
rect(objects[0].x,objects[0].y,objects[0].hight,objects[0].width)
}
}
}