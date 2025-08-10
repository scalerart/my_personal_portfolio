const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const selections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    selections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                selections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            selections[0].classList.add('active');
        }, 1100);
    }
});

// Resume buttons
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio Slide
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
let index = 0;

const slides = document.querySelectorAll('.img-slide .img-item');
const totalSlides = slides.length;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-box .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');

    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

activePortfolio(); // Initialize on load