// Get elements from the DOM
const images=document.querySelectorAll(".gallery img");
const lightbox=document.querySelector(".lightbox");
const mainImg=document.querySelector(".lightbox img");
const arrLeft=document.querySelector(".arrow-left");
const arrRight=document.querySelector(".arrow-right");

// Variable holding the image index
let imgIndex=0;

// Opening the Lightbox

// Loop through images
images.forEach(img =>{
    img.addEventListener('click', e=>{
        // Set main image source to clicked image source
        mainImg.src=e.target.src;
        // Set image index to curretn image index
        /*
        Basically what I'm doing here is taking the images Array and searching for an item that matches the 'img'. That way we get the index of the image we click on. I will leave a link for destructuring and the indexOf method so that you cna explore them yourself and learn more
        */
       imgIndex=[...images].indexOf(img);
        //Show the lightbox
        lightbox.style.display="flex";
        // Add smooth transition
        setTimeout(()=>{
            lightbox.style.opacity="1";
        },10); 
    });
});

// Closing the lightbox

// Set click event to window
window.addEventListener("click", e=>{
    // If the clicked element has a class of 'lightbox'
    if(e.target.classList.contains('lightbox')){
        // Add smooth transition
        lightbox.style.opacity="0";
        // Hide the modal after transition
        setTimeout(() => {
            lightbox.style.display="none";
        }, 350);
    }
});

// Changing to previous image

// Add click event to previous arrow
arrLeft.addEventListener("click", ()=>{
    //Decrement image index
    imgIndex--;
    // If the index is below the first image
    if(imgIndex<0){
        // Set index to last image
        imgIndex=images.length-1;
    }
    // Set main image to upadated image index
    mainImg.src=images[imgIndex].src;
});


// Changing to next Image

// Add click event to next arrow
arrRight.addEventListener('click', ()=>{
    // Increment image index
    imgIndex++;
    // If the index is above the last image
    if(imgIndex>images.length-1){
        //Set index to first image
        imgIndex=0;
    }
    // Set main image to updated image index
    mainImg.src=images[imgIndex].src;
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};