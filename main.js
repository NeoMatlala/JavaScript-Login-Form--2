/* ----- SELECTORS ----- */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signUpLink = document.getElementById('dont-have-account');
const SignInLink = document.getElementById('already-have-account');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');


/* ----- EVENT LISTENERS ----- */

// adding class
signUpButton.addEventListener('click', () => 
    container.classList.add('right-panel-active')
);

// adding class
signInButton.addEventListener('click', () => 
    container.classList.remove('right-panel-active')
)



/* ----- SHOW AND HIDE LOGINS (mobile view) ------ */
signUpLink.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

SignInLink.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})
