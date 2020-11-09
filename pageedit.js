function nachrichtenEmpfang(message) {
    var i;

    var videoelements = document.getElementsByTagName("video");
    for (i = 0; i < videoelements.length; i++) {
        if (videoelements[i].parentElement.id.startsWith('id_videojs')) {
            var videonodebuffer = videoelements[i].cloneNode(true);

            videonodebuffer.setAttribute("controls", "true");
            videonodebuffer.setAttribute("title", "");

            videoelements[i].parentElement.parentElement.appendChild(videonodebuffer);
            videoelements[i].parentElement.remove();
        }
    }
}

browser.runtime.onMessage.addListener(nachrichtenEmpfang);