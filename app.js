document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
       
        case 39:
           nextImage();
            break;

    }
  });







// Add variable that counts clicks

let clickCount1 = 0;


// Store images in an array

let imgArray = [

    "./images/img2.jpg",

    "./images/img3.jpg",

    "./images/img4.jpg",

    "./images/img5.jpg",

    "./images/img6.jpg",
]

// add event listeners

document.getElementById("button-next").addEventListener('click', nextImage);

// create function to cycle to next image on click

function nextImage() {

    if (clickCount1 == 0) {
        document.getElementById("imagedisplay").src = "images/img2.jpg";
    } else if (clickCount1 == 1) {
        document.getElementById("imagedisplay").src = "images/img3.jpg";
    } else if (clickCount1 == 2) {
        document.getElementById("imagedisplay").src = "images/img4.jpg";
    } else if (clickCount1 == 3) {
        document.getElementById("imagedisplay").src = "images/img5.jpg";
    } else if (clickCount1 == 4) {
        document.getElementById("imagedisplay").src = "images/img6.jpg";
    } else if (clickCount1 == 5) {
        document.getElementById("imagedisplay").src = "images/img1.jpg";
    }
    
    if (clickCount1 === 5) {
        clickCount1 = 0;
    } else {
        clickCount1++
    }
 
    console.log("next")
}

// create function to cycle back to previous image on click

