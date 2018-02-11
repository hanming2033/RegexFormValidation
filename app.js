document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName() {
  const value = this.value;
  validate(/^[a-zA-Z]{2,20}$/, value, this);
}

function validateZip() {
  const value = this.value;
  validate(/^\d{6}$/, value, this);
}

function validateEmail() {
  const value = this.value;
  validate(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, value, this);
}

function validatePhone() {
  const value = this.value;
  validate(/([689]\d{3}[ -]?\d{3}\d)\b/, value, this);
}

function validate(regex, str, self) {
  if (!str.match(regex)) {
    self.classList.add('is-invalid');
  } else {
    self.classList.remove('is-invalid')
  }
}