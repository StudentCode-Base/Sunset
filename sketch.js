const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch('http://worldtimeapi.org/api/timezone/America/Chicago')
    var responseType=await response.json()
    console.log (responseType)
    var dt = responseType.datetime
    console.log (dt);
    var hour1=dt.slice(11,13);
    console.log (hour1)
    if (hour1>=04&&hour1<=06){
        bg='sunrise1.png'
    }
    if(hour1>=06&&hour1<=08){
        bg='sunrise2.png'
    }
    if(hour1>=08&&hour1<=10){
        bg='sunrise3.png'
    }
    if(hour1>=10&&hour1<=12){
        bg='sunrise4.png'
    }
    if(hour1>=12&&hour1<=14){
        bg='sunrise5.png'
    }
    if(hour1>=14&&hour1<=16){
        bg='sunrise6.png'
    }
    if(hour1>=16&&hour1<=18){
        bg='sunset7.png'
    }
    if(hour1>=18&&hour1<=20){
        bg='sunset8.png'
    }
    if(hour1>=20&&hour1<=22){
        bg='sunset9.png'
    } if(hour1>=22&&hour1<=00){
        bg='sunset10.png'
    }
    if(hour1>=00&&hour1<=02){
        bg='sunset11.png'
    }
    if(hour1>=02&&hour1<=04){
        bg='sunset12.png'
    }
backgroundImg=loadImage(bg)
console.log(bg);
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
