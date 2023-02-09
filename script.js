    window.addEventListener('Load', testLoad);
    window.setTimeout(fade, 5000);
    window.setTimeout(stopAllLoad, 6000);
function testLoad() {
        startLoad();
        stopAllLoad();
}

function startLoad() {
    document.getElementById("loadingwindow").style.visibility = 'visible';
    document.removeEventListener('touchmove', noscroll, {passive: false});
    document.removeEventListener('wheel', noscroll, {passive: false});
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
    document.addEventListener('touchmove', noscroll, {passive: false});
    document.addEventListener('wheel', noscroll, {passive: false});
    let elements = document.getElementsByClassName('loading');
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}
