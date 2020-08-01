$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
});



const  scrollFunction =  () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("nav").classList.add("bg-nav");
        document.getElementById("nav").classList.add("navbar-shadow");
    }else {
        document.getElementById("nav").classList.remove("bg-nav");
        document.getElementById("nav").classList.remove("navbar-shadow");
    }
}

window.onscroll = function() {
    scrollFunction();

};