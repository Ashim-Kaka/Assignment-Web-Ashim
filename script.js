document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const closeButtons = document.querySelectorAll('.close');
    

    // Open login modal
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    // Open signup modal
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'block';
    });

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Close modals when clicking outside of the modal content
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        } else if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Basic form validation for Login (placeholder functionality)
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login Successful!');
        loginModal.style.display = 'none';
    });

    // Basic form validation for Signup (placeholder functionality)
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup Successful!');
        signupModal.style.display = 'none';
    });

    // chat alert:
    const chatButton = document.getElementById('chat-btn');
    chatButton.addEventListener('click', (e) => {
        alert('Live chat support is coming soon!');
    });
});
