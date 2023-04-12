var container = document.querySelector('#container');

var panorama = new
PANOLENS.ImagePanorama('image/gambar 1.jpg');

var panorama2 = new
PANOLENS.ImagePanorama('image/gambar 2.jpg');

var panorama3 = new
PANOLENS.ImagePanorama('image/gambar 3.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3);

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load("image/next.png", function() {
    var infospot = new PANOLENS.Infospot(250, "image/next.png");
    infospot.position.set(0, 1500, 3000);
    infospot.addEventListener("click", function() {
        onButtonClick(panorama2);
    });
    panorama.add(infospot);
});

var customInfospot = textureLoader.load("image/next.png", function() {
    var infospot = new PANOLENS.Infospot(250, "image/next.png");
    infospot.position.set(0, 1500, 3000);
    infospot.addEventListener("click", function() {
        onButtonClick(panorama3);
    });
    panorama2.add(infospot);
});

var customInfospot = textureLoader.load("image/next.png", function() {
    var infospot = new PANOLENS.Infospot(250, "image/next.png");
    infospot.position.set(0, 1500, 3000);
    infospot.addEventListener("click", function() {
        onButtonClick(panorama);
    });
    panorama3.add(infospot);
});

var bar = document.querySelector("#bar");

function onProgressUpdate(event) {
    var percentage = (event.progress.loaded / event.progress.total) * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add("hide");
        setTimeout(function() {
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove("hide");
    viewer.setPanorama(targetPanorama);
}
panorama.addEventListener("progress", onProgressUpdate);
panorama2.addEventListener("progress", onProgressUpdate);