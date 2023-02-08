function init() {
    window.addEventListener('DOMContentLoaded', testLoad);
    stopAllLoad();
}

function testLoad() {
        startLoad();
        setTimeout(stopAllLoad, 3000);
    }
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

window.addEventListener('DOMContentLoaded', init);
