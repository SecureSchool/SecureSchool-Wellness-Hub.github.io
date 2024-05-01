document.getElementById('back-to-home').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000); 
});
function toggleMenu() {
    var links = document.querySelector('.links');
    links.classList.toggle('active');
}
