document.addEventListener("DOMContentLoaded", function() {
    var slidingBox = document.getElementById("slidingBox");

    slidingBox.style.left = "-200px"; 

    
    setTimeout(function() {
        slidingBox.style.left = "0"; 
    }, 1000); 
});
function toggleMenu() {
    var links = document.querySelector('.links');
    links.classList.toggle('active');
}
