interface NewUser {
  name: string,
  age: number,
  skills: string[],
  log: (id: string) => string,
  log1(id: number): number,
}

interface NewRole {
  roleId: number
}

interface ExtendedUserWithRole extends NewUser {
  roleId: number
}

interface NewUserWithRole extends NewUser, NewRole {}

const newUser: NewUser = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  log: (id) => id,
  log1: (id) => id
};

const newUser2: NewUser = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  log: (id) => id,
  log1: (id) => id
};

const extendedUserWithRole: ExtendedUserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 10,
  log(id) {
    return id
  },
  log1(id) {
    return id
  }
};

const newUserWithRole: NewUserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 10,
  log(id) {
    return id

  },
  log1: (id) => id
};


interface NewUserList {
  [key: number]: NewUser // бесконичное количество свойств, где ключ - число, а значение - NewUser
}

// Альтернативная записть NewUserList
type NewUserList2 = Record<number, NewUser>;

const newUserList = {
  0: newUser,
  1: newUser2,
}