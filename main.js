function preload(){

}
function setup(){
    canvas = createCanvas(600,480);
    canvas.position(200,300);
    video = createCapture(VIDEO);
    video.hide();
    filters="";

}
function draw() {
   image(video,0,0,600,480);
   tint(filters);
}
function filter_color() {
   filters = document.getElementById("filter").value;
   
}
function take_snapshot() {
    save('Filter.png');

}