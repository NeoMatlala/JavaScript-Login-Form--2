/* ----- SELECTORS ----- */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


/* ----- EVENT LISTENERS ----- */

// adding class
signUpButton.addEventListener('click', () => 
    container.classList.add('right-panel-active')
);

// adding class
signInButton.addEventListener('click', () => 
    container.classList.remove('right-panel-active')
)
