    window.addEventListener('Load', testLoad);
    window.setTimeout(fade, 5000);
    window.setTimeout(stopAllLoad, 6000);
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
