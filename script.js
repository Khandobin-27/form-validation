// TODO: Select all elements needed
const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirmation')
const terms = document.getElementById('terms')
const errors = document.querySelector('.errors')
const errorsList = document.querySelector('.errors-list')

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages
form.addEventListener('submit', (e) => {
    const errorMessages  = []
    clearErrors()
    
    if (username.value.length < 6) {
        errorMessages.push('Username must be at least 6 characters')
    }

    if (password.value.length < 6){
        errorMessages.push('Password to weak (at east 6 characters)')
    }

    if (passwordConfirm.value !== password.value) {
        errorMessages.push('Password did not match')
    }

    if (!terms.checked) {
        errorMessages.push('Terms are not accepted')
    }

    if (errorMessages.length > 0) {
        e.preventDefault() 
        showErrors(errorMessages)
    }

})


function clearErrors() {

    errorsList.innerHTML = ''

    //remove errors show window if there is no errors
    errors.classList.remove('show')
  }
  
  // TODO: Add each error to the error-list element
  function showErrors(errorMessages) {
      errorMessages.forEach(element => {
          errors.classList.add('show')
          let li = document.createElement('li')
          li.appendChild(document.createTextNode(element)) //li.innerText = element // would do the same
          errorsList.appendChild(li)
      });
  }