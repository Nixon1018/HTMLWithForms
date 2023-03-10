const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const date = document.getElementById('date')

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
});

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = ''
};

const isValidEmail = (email) => {
    const re =/\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase())
}
const isValidUsername = (username) => {
    const rex = /^(\D*)$/
    return rex.test(String(username).toLowerCase())
}

const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    const datevalue = new Date(date.value)
    const date1 = new Date()

    if(usernameValue === '') {
        setError(username, 'Username is required')
    } else if(!isValidUsername(usernameValue))
    {
        setError(username, 'Provide a valid username')
    }
    else {
        setSuccess(username)
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password, 'Password is required')
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password)
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password')
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match")
    } else {
        setSuccess(password2);
    }
    if(datevalue > date1){
        setError(date, "Enter a valid date")
    }else {
        setSuccess(date);
    }

};
