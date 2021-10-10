const velo = document.getElementById("velo");
const pompier = document.getElementById("pompier");
const police = document.getElementById("police");
const klaxon = document.getElementById("klaxon");
const moto = document.getElementById("moto");

let playing = false;
let trackPlaying = [];

function play(melody) {
    if (melody == 'pompierBruit' && !playing) {
        var path = "./public/des bruits/"
        var bruit = new Audio(path + 'pompierBruit' + ".m4a");
        bruit.currentTime = 1;
        bruit.play();
        setTimeout(function () { bruit.pause() }, 4000)
        playing = true;
        setTimeout(function () { playing = false; }, 3000)
        trackPlaying = bruit;
    } else if (melody == 'veloBruit'&& !playing){
        var path = "./public/des bruits/"
            var bruit = new Audio(path + melody + ".mp3");
            bruit.currentTime = 3;
            bruit.play();
            setTimeout(function () { bruit.pause(); }, 4000)
            setTimeout(function () { playing = false; }, 3000)
            playing = true;
    } else {
            var path = "./public/des bruits/"
            var bruit = new Audio(path + melody + ".mp3");
            bruit.currentTime = 2;
            bruit.play();
            setTimeout(function () { bruit.pause(); }, 4000)
            setTimeout(function () { playing = false; }, 3000)
            playing = true;
        }
        trackPlaying[0] = bruit;
        console.log(trackPlaying);
        return trackPlaying;
    }
 
function stop() {
    console.log(trackPlaying)
    trackPlaying[0].pause();
}