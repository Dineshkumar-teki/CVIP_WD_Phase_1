let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id + ']').classList.add('active');
            })
        }
    });

    let header = document.querySelector('header');
    header.classList.toogle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.homeContainer, .heading', {origin:'top'});
ScrollReveal().reveal('.homeImg, .skillsContainer, .projectsItem, .contact form' , {origin:'bottom'});
ScrollReveal().reveal('.homeContent h1, .aboutImg' , { origin:'left' });
ScrollReveal().reveal('.homeContent p,.aboutContent', { origin:'right' });

const typed = new Typed('.multipleText',{
    strings:['Full Stack Developer', 'Web Designer', 'Python Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});