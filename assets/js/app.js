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
    // Select the content div and the icons
    const content = document.getElementById('content' + index);
    const button = content.previousElementSibling;
    const plusIcon = button.querySelector('.accordion-icon-plus');
    const minusIcon = button.querySelector('.accordion-icon-minus');

    // Check if elements exist to avoid errors
    if (content && plusIcon && minusIcon) {
        // Toggle content visibility
        content.classList.toggle('hidden');

        // Toggle icons
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
const flag = document.getElementById('flag');
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.selectedOptions[0];

    const newFlag = selectedOption.getAttribute('data-flag');
    flag.src = newFlag;
});

