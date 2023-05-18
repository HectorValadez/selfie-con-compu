Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100
})
var Herobrine =window.webkitSpeechRecognition;
var Steve =new Herobrine();
Steve.lang="es-MX";
function iniciar(){
    Steve.start();
}
Steve.onresult=function(shulker){
    console.log(shulker);
    hay_mounstros_cerca=shulker.results[0][0].transcript;
    document.getElementById("textbox").value=hay_mounstros_cerca;
    say("se recibio un mensaje del portal del nether " + hay_mounstros_cerca)
    console.log(hay_mounstros_cerca)
    if (hay_mounstros_cerca=="Parangaricutirimicuaro") {
        Webcam.attach("#camara");
        say("em 8 segundos se van a robar tu alma osea una foto")
      setTimeout(roba_alma,8000)  
    }
}
function say(imitador){
    var bilingue = window.speechSynthesis;
    var malinche = new SpeechSynthesisUtterance(imitador);
    malinche.lang="es-MX";
    bilingue.speak(malinche)
}
function roba_alma() {
    Webcam.snap(function(datauri){
        document.getElementById("resultado").innerHTML='<img src="'+datauri+'" id="foto">'
        guardar_foto()
    })
}
function guardar_foto() {
    var foto=document.getElementById("foto").src;
    var link=document.getElementById("link");
    link.href=foto;
    link.click();
}