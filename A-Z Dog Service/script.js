// Selecting elements from the DOM
const wrapper = document.querySelector('.wrapper'); // Selecting the wrapper element
const loginLink = document.querySelector('.login-link'); // Selecting the login link element
const registerLink = document.querySelector('.register-link'); // Selecting the register link element

// Adding event listener for the register link
registerLink.addEventListener('click', () => {
    // When the register link is clicked, add the 'active' class to the wrapper element
    wrapper.classList.add('active');
});

// Adding event listener for the login link
loginLink.addEventListener('click', () => {
    // When the login link is clicked, remove the 'active' class from the wrapper element
    wrapper.classList.remove('active');
});
