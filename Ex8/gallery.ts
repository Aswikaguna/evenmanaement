const navbarLinks = document.querySelectorAll('.navbar a');
const locationImgElements = document.querySelectorAll('.locations .col-content img');


navbarLinks.forEach(link => {
    link.addEventListener('click', (event: Event) => {
     
        event.preventDefault();
        
    
        const href = (event.target as HTMLAnchorElement).getAttribute('href');
        
       
        if (href) {
            window.location.href = href;
        }
    });
});



