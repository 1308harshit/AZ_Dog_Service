document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper'); // Selecting the wrapper element
    const navbar = document.querySelector('#myNavbar'); // Selecting the navbar element

    // Adding event listener to the parent element of login and register links (event delegation)
    navbar.addEventListener('click', function(event) {
        const target = event.target;

        // Check if the clicked element is the login link
        if (target.classList.contains('login-link')) {
            // Remove 'active' class from wrapper
            wrapper.classList.remove('active');
        }

        // Check if the clicked element is the register link
        if (target.classList.contains('register-link')) {
            // Add 'active' class to wrapper
            wrapper.classList.add('active');
        }
    });
});
