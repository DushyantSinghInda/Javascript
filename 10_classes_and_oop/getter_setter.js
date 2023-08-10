class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}dushyant`;
  }
  set password(value) {
    this._password = value;
  }
}

const dushyant = new User("d@gmail.com", "abc");
console.log(dushyant.email);
