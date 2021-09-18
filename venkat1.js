var url = "";
function download(cb) {
    setTimeout(() => {
        console.log("Download started");
        url = "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg";
        console.log("Download completed", url);
        cb(url);}, 3000);
    }
    download(function (data) {var img = document.createElement("img");
    img.src = data;img.alt = "No image";
    document.getElementById("img").append(img);});