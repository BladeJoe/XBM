
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Toggle hamburger menu
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });


    // Add active class based on scroll position
    const makeNavActive = () => {
        let scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60; // Adjust for header height
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach((item) => {
                    item.classList.remove('active');
                    item.removeAttribute('onclick'); // Make other links clickable
                });
                const activeLink = document.querySelector(`.nav-links li a[href="#${sectionId}"]`);
                activeLink.classList.add('active');
                activeLink.setAttribute('onclick', 'return false'); // Make the active link unclickable
            }
        });
    };

    // Call on scroll and page load
    window.addEventListener('scroll', makeNavActive);
    makeNavActive();
    AOS.init({
        duration: 250
    });
});