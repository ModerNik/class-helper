import { AxiosResponse } from "axios";
import api from "../axios";

export default class JournalAPI {
  static async getLessons(date: string): Promise<AxiosResponse> {
    return api.post('/journal/get_lessons', { date })
  }
}