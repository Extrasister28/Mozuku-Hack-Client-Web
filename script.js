    window.addEventListener('Load', testLoad);
    stopAllLoad();

function testLoad() {
        startLoad();
        setTimeout(stopAllLoad, 5000);
}

function startLoad() {
    document.getElementById("loadingwindow").style.visibility = 'visible';
}

function stopAllLoad() {
    document.getElementById("loadingwindow").style.visibility = 'hidden';
}

