export class Userlogin {
  email!: string;
  password!: string;

  constructor(email?: string, password?: string) {
    email = this.email;
    password = this.password;
  };
}
