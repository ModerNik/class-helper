import { makeAutoObservable, makeObservable, observable } from "mobx"

export type User = {
  name: string;
  email: string;
}

class UserStore {
  name: string = "";
  email: string = "";

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      email: observable,
    })
  }

  setUser(user: User) {
    this.name = user.name;
    this.email = user.email;
  }
}

export default new UserStore();