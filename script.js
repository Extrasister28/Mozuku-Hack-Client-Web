window.onload = function() {
    let dataId = this.getAttribute('data-id');
    if (dataId) {
        startLoad(dataId);
        setTimeout(stopAllLoad, 10000);
    }
}

function startLoad(id) {
    document.getElementById(id).style.visibility = 'visible';
}

function stopAllLoad() {
    let elements = document.getElementsByClassName('loading');
    for (let element of elements) {
        element.style.visibility = 'hidden';
    }
}

window.addEventListener('load', init);
