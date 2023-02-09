    window.addEventListener('Load', testLoad);
    window.setTimeout(stopAllLoad, 5000);
function testLoad() {
        startLoad();
        stopAllLoad();
}

function startLoad() {
    document.getElementById("loadingwindow").style.visibility = 'visible';
}

function stopAllLoad() {
    let elements = document.getElementsByClassName('loading');
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}
