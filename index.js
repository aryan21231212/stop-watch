let time = document.querySelector("#time")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let timer = null;

let sec = 0;
let mn = 0;
let hr = 0;


async function watch() {
    sec++;
    if (sec === 60) {
        mn++;
        sec = 0;
        if (mn === 60) {
            hr++;
            mn = 0;
        }
    }

    let s = sec<10?"0"+ sec:sec;
    let m = mn<10?"0"+ mn:mn;
    let h = hr<10?"0"+ hr:hr;

    time.innerHTML = `${h}:${m}:${s}`;

};

function startt() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);
}

function stopp() {
    clearInterval(timer)
}

function resett() {
    clearInterval(timer);
    time.innerHTML = "00:00:00"
     sec = 0;
     mn = 0;
     hr = 0;
}