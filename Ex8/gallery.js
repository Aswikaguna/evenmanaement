var navbarLinks = document.querySelectorAll('.navbar a');
var locationImgElements = document.querySelectorAll('.locations .col-content img');

navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
   
        event.preventDefault();
   
        var href = event.target.getAttribute('href');
 
        if (href) {
            window.location.href = href;
        }
    });
});
locationImgElements.forEach(function (imageElement) {
    imageElement.style.width = '100%'; 
    imageElement.style.height = 'auto'; 
    imageElement.style.maxWidth = '200px'; 
});
