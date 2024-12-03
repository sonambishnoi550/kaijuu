// Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("translate-x-0");
    document.body.classList.toggle("overflow-hidden");
    hamburgerIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
});

function toggleAccordion(index) {
    const content = document.getElementById('content' + index);
    const button = content.previousElementSibling;
    const plusIcon = button.querySelector('.accordion-icon-plus');
    const minusIcon = button.querySelector('.accordion-icon-minus');

    if (content && plusIcon && minusIcon) {

        content.classList.toggle('hidden');

        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
    }
}


// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// slider

$(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
// flag
const flag = document.getElementById('flag');
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.selectedOptions[0];

    const newFlag = selectedOption.getAttribute('data-flag');
    flag.src = newFlag;
});
// Back-to-top Button
const mybutton = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");
window.addEventListener("scroll", () => {
    mybutton.classList.toggle("hidden", window.scrollY <= heroSection.offsetHeight);
});
mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

