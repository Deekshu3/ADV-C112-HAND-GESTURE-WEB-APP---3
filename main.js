Predicition1="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(capture_img){
        document.getElementById("photo").innerHTML='<img id="display_img" src="' +capture_img+'">';
    });
}
console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function speak(){
    synth=window.speechSynthesis;
    predict1="The first prediction is "+Predicition1;
    voice=new SpeechSynthesisUtterance(predict1);
    synth.speak(voice);
}

function check(){
    img=document.getElementById("display_id");
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    } else{
        console.log(results);
        Predicition1=results[0].label;
        Predicition2=results[1].label;
        document.getElementById("gesture_name").innerHTML=predicition1;
        document.getElementById("gesture_name2").innerHTML=Predicition2;
        speak();

        if(predicition=="This looking is the best"){
            document.getElementById(gesture).innerHTML="&#128076";
        }
        if(predicition=="All the best"){
            document.getElementById(gesture).innerHTML="&#128077";
        }
        if(predicition=="That was a marveleous victory"){
            document.getElementById(gesture).innerHTML="&#9996";
        }
    }
 }

