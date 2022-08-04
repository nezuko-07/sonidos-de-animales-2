
function empezar_clasificacion(){
    navigator.mediaDevices.getUserMedia({ audio: true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I6gRjE7AK/.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults)

}
function gotResults(error, results) 
{
     console.log('Got Result'); 
}