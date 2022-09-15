type HttpMethod = 'post' | 'get';

type MyUser = {
  name: string,
  age: number,
  skills: string[]
  log: (id: string) => string,
  log1(id: number): number,
}

type Role = {
  id: number;
}

type UserWithRole = MyUser & Role
type UserOrRole = MyUser | Role

const myUser: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1,
  log: (id) => id,
  log1(id) {
    return id
  }
};

const role: UserOrRole = {
  id: 1
};