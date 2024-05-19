import { AxiosResponse } from "axios";
import api from "../axios";

export default class AuthAPI {
  static async login(email: string, password: string): Promise<AxiosResponse> {
    return api.post('/user/login', { email, password })
  }
  
  static async logout(): Promise<AxiosResponse> {
    return api.delete('/user/logout')
  }
}