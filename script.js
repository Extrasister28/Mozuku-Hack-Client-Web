window.addEventListener('Load', testLoad);
let time = Math.floor(Math.random() * 5) + 1;
window.setTimeout(fade, time * 1000);
window.setTimeout(stopAllLoad, time * 1000 + 6000);

function testLoad() {
        startLoad();
        stopAllLoad();
}

function startLoad() {
    document.getElementById("loadingwindow").style.visibility = 'visible';
}

function fade() {
    document.querySelector('#loadingwindow').animate(
  [
    { opacity: 1 },
    { opacity: 0 }
  ],
  {
    duration: 1000,
    fill: 'forwards'
  }
);
}

function stopAllLoad() {
    let elements = document.getElementsByClassName('loading');
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}
