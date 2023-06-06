const inputEl = document.querySelector('#password');

let passwordLength = 16;

function generatePassword() {
  const chars =
    'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$%&*()-+/{}[]|^~=';

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputEl.value = password;
}

function copy() {
  navigator.clipboard.writeText(inputEl.value);
}

const passwordLengthEl = document.querySelector('#password-length');
passwordLengthEl.addEventListener('input', function () {
  const passwordLength = passwordLengthEl.value;
});

const copyButtonEl = document.querySelector('#copy');
copyButtonEl.addEventListener('click', copy);

generatePassword();
