let allLinks = document.querySelectorAll('.nav-link')


allLinks.forEach((link) => {

    link.addEventListener('click',() =>{
        
        allLinks.forEach((linkActive) => {
            linkActive.classList.remove('active'); //
        })
        link.classList.toggle('active');
    });

})


