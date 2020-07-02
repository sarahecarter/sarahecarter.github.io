// Variables
let enter = document.getElementById('enter');

// Show next page function
const showNextPage = () => {
    gsap.timeline()
        .to(".transition", {
                duration: 1,
                opacity: 0,
                ease: "power4.out", 
                display: "none"})
        .from(".main", {
            opacity: 0,
        })
        .fromTo(".profile-pic", {x: -600}, {x:0, duration: 1}, 2)
        .fromTo(".title-slide", {x: 1200}, {x:0, duration: 1}, 2)
        .fromTo(".text-slide", {y:600}, {y:0, duration: 1.5, ease: "expo"}, 3.5)
}

// When user clicks on 'Enter' Show Next Page animation happens
enter.addEventListener('click', showNextPage);