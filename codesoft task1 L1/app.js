// document.addEventListener('DOMContentLoaded', function() {
//     const welcomeCard = document.getElementById('welcome-card');
//     const signupButton = document.getElementById('signup-button');
//     const signupForm = document.getElementById('signup-form');
    
//     signupButton.addEventListener('click', function() {
//         welcomeCard.classList.add('hidden');
//         signupForm.classList.remove('hidden');
//     });})

//     signupForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
        
//         // Perform signup validation and submission
//         if (validateSignup(name, email, password)) {
//             // Simulate signup success
//             alert('Signup successful!');
          
//         } else {
//             // Simulate signup error
//             alert('Signup failed. Please try again.');
//         }
//     });

//     function validateSignup(name, email, password) {
//         // Perform validation here (e.g., check if fields are not empty)
//         if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
//             return false;
//         }
//         return true;
//     }






document.addEventListener('DOMContentLoaded', function() {
        const welcomeCard = document.getElementById('welcome-card');
        const signupButton = document.getElementById('signup-button');
        const signupForm = document.getElementById('signup-form');
        
        signupButton.addEventListener('click', function() {
            welcomeCard.classList.add('hidden');
            signupForm.classList.remove('hidden');
        });})


document.addEventListener('DOMContentLoaded', function() {
    const welcomeCard = document.getElementById('welcome-card');
    const signupCard = document.getElementById('signup-card');
    const loginCard = document.getElementById('login-card');
    const signupBtn = document.getElementById('signup-btn');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const signupForm = document.getElementById('signup-form');

    signupBtn.addEventListener('click', function() {
        welcomeCard.classList.add('hidden');
        signupCard.classList.remove('hidden');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginCard.classList.add('hidden');
        signupCard.classList.remove('hidden');
        
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const agreePolicy = document.getElementById('agree-policy').checked;
        alert('Sign Up successful')
        
        // Perform signup validation and submission
        if (validateSignup(name, email, password, agreePolicy)) {
            // Simulate signup success
            alert('Signup successful!');
            signupForm.reset();
            alert('Sign Up successful')
            signupCard.classList.add('hidden');
            welcomeCard.classList.remove('hidden');
        } else {
            // Simulate signup error
            alert('Signup failed. Please try again.');
        }
    });

    function validateSignup(name, email, password, agreePolicy) {
        // Perform validation here (e.g., check if fields are not empty and policy is agreed)
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || !agreePolicy) {
            return false;
        }
        return true;
    }
});





























