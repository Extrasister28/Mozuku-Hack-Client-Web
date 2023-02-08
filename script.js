    window.addEventListener('Load', testLoad);

function testLoad() {
        startLoad();
        stopAllLoad();
        setTimeout(stopAllLoad, 5000);
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
