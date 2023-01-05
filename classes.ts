class User1 {
  name: string;
  age!: number;

  constructor(name: string) {
    this.name = name;
  }
}

const user11 = new User1('Ivan');

class User122 {
  private _login!: string;
  private _password!: string;
  
  get login(): string {
    return this._login;
  }

  set login(value) {
    this._login = `user-${value}`;
  }
}

const user122 = new User122();
console.log(user122.login);
user122.login = 'Antony';
console.log(user122.login);
