import { AxiosResponse } from "axios";
import api from "../axios";
import { User } from "@/models/user";

export default class UserAPI {
  static async getUser(id: number): Promise<AxiosResponse<User>> {
    return api.get('/user/get_user', {
      params: { id }
    })
  }
}