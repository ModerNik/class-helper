import { makeAutoObservable, makeObservable, observable } from "mobx";

class AuthStore {
  isAuth: boolean = true;
  // need to be false by default

  constructor() {
    makeAutoObservable(this, {
      isAuth: observable,
    })
  }

  setAuth(auth: boolean) {
    this.isAuth = auth;
  }
}

export default new AuthStore();