let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]; 
let index = 0;
let intervalId = null;

let slideImg = document.getElementById("slide");


function showImage(i) {

    slideImg.src = images[i];
}


function nextImage() {

    index++;
    if (index >= images.length) 
        index = 0;
    showImage(index);
}


function previousImage() {
    
    index--;
    if (index < 0) 
        index = images.length - 1;
    showImage(index);
}


function startShow() {

    if (!intervalId) {

        index = 0; 
        intervalId = setInterval(() => {
            showImage(index);
            index++;
            if (index >= images.length) {
                index = 0; 
            }
        }, 1500);
    }
}


function stopShow() {

    clearInterval(intervalId);
    intervalId = null;
}

