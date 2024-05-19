export type UserDTO = {
  email: string;
  password: string;
}

export type User = {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
}

export type Student = User & {
  class: string;
  parentPhoneNumber: string;
}

export type Teacher = User & {
  subject: string;
}

export type Group = {
  id: number;
  name: string;
  students?: Student[];
}
