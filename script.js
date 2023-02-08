function init() {
    document.getElementById(id).style.visibility = 'visible';
    stopAllLoad();
    setTimeout(stopAllLoad, 10000);
}

function stopAllLoad() {
    let elements = document.getElementsByClassName('loading');
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}

window.addEventListener('load', init);
