let form = document.querySelector('form'),
    usernameInput = document.getElementById('username'),
    emailInput = document.getElementById('email'),
    passwordInput = document.getElementById('password'),
    passCheckBar = document.getElementById('password-check-bar'),
    confirmPasswordInput = document.getElementById('confirm-password'),
    submit = document.getElementById('signup');

function formIsRequired(value) {
    return value.trim() !== '';
}

const formIsEmailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

const formIsPasswordSecure = (password) => {
    const isCharNoCap = new RegExp("^(?=.*[a-z])"),
        isCharCap = new RegExp("^(?=.*[A-Z])"),
        isDigit = new RegExp("^(?=.*[0-9])"),
        isSpecial = new RegExp("^(?=.*[!@#\$%\^&\*])"),
        isLong = new RegExp("^(?=.{8,})");
    let passStrength = 0
    regexs = [isCharNoCap, isCharCap, isDigit, isSpecial, isLong];
    regexs.forEach(regex => {
        if (regex.test(password)) {
            passStrength += 20;
        }
    });
    passCheckBar.className = 'progress-bar'
    passCheckBar.style.width = `${passStrength}%`
    passCheckBar.setAttribute('aria-valuenow', `${passStrength}`)
    if (passStrength <= 40) {
        passCheckBar.classList.add('bg-danger')
    } else if (passStrength <= 80) {
        passCheckBar.classList.add('bg-warning')
    } else {
        passCheckBar.classList.add('bg-success')
    }
    return passStrength
};

const formIsBetween = (username, min, max) => {
    return username.length >= min && username.length <= max;
};

const formCheckUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;

    const username = usernameInput.value.trim();

    if (!formIsRequired(username)) {
        formError(usernameInput, 'İstifadəçi adı boş qala bilməz');
    } else if (!formIsBetween(username, min, max)) {
        formError(usernameInput, `İstifadəçi adı ən az ${min} ən çox ${max} işarədən ibarət ola bilər`)
    } else {
        formSuccess(usernameInput);
        valid = true;
    }
    return valid;
};

const formCheckEmail = () => {
    let valid = false;
    const email = emailInput.value.trim();
    if (!formIsRequired(email)) {
        formError(emailInput, 'Email boş qala bilməz');
    } else if (!formIsEmailValid(email)) {
        formError(emailInput, 'Email düzgün yazılmayıb')
    } else {
        formSuccess(emailInput);
        valid = true;
    }
    return valid;
};

const formCheckPassword = () => {
    let valid = false;
    const password = passwordInput.value.trim();

    if (!formIsRequired(password)) {
        formError(passwordInput, 'Şifrə boş qala bilməz');
    } else if (formIsPasswordSecure(password) < 100) {
        formError(passwordInput, 'Şifrə ən az 8 işarədən ibarət olmaqla yanaşı ən az 1 kiçik, 1 böyük və 1 xüsusi işarədən ibarət olmalıdır (!@#$%^&*)');
    } else {
        formSuccess(passwordInput);
        valid = true;
    }
    return valid;
};

const formCheckConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordInput.value.trim(),
    password = passwordInput.value.trim();

    if (!formIsRequired(confirmPassword)) {
        formError(confirmPasswordInput, 'Şifrəni bir daha yazın');
    } else if (password !== confirmPassword) {
        formError(confirmPasswordInput, 'Şifrələr bir - biri ilə uyğun deyil');
    } else {
        formSuccess(confirmPasswordInput);
        valid = true;
    }
    return valid;
};

const formError = (input, message) => {
    input.classList.remove('outline-success');
    input.classList.add('outline-error');
    const formField = input.parentElement,
        html = `<span class="small mt-3 error-message">${message}</span>`
    if (formField.querySelector('.error-message') == null) {
        formField.insertAdjacentHTML('beforeend', html);
    }
};

const formSuccess = (input) => {
    input.classList.remove('outline-error');
    input.classList.add('outline-success');
    const formField = input.parentElement;
    errMessage = formField.querySelector('.error-message')
    if (errMessage != null) {
        errMessage.remove();
    }
};

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let isUsernameValid = formCheckUsername(),
        formIsEmailValid = formCheckEmail(),
        isPasswordValid = formCheckPassword(),
        isConfirmPasswordValid = formCheckConfirmPassword();

    let isFormValid = isUsernameValid &&
        formIsEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    form.classList.remove('outline-error', 'outline-success');
    submit.classList.remove('btn-danger', 'btn-success');
    if (isFormValid) {
        form.classList.add('outline-success');
        submit.classList.add('btn-success');
        submit.innerText = 'Uğurlu oldu'
    } else {
        form.classList.add('outline-error');
        submit.classList.add('btn-danger');
        submit.innerText = 'Təkrar yoxla'
    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            formCheckUsername();
            break;
        case 'email':
            formCheckEmail();
            break;
        case 'password':
            formCheckPassword();
            break;
        case 'confirmPassword':
            formCheckConfirmPassword();
            break;
    }
})