interface User1 {
  login: string;
  password?: string;
}

interface User2 {
  login: string;
  password?: {
    type: 'simple' | 'medium'
  }
}

const user1: User1 = {
  login: 'user1',
}

const user2: User2 = {
  login: 'user1',
  password: {
    type: 'medium'
  }
}

function multiple(a: number = 5, b?: number): number {
  if (b) {
    return a * b;
  }

  return a * a;
}

console.log(multiple(10, 20));
console.log(multiple(10));
console.log(multiple());

const userPassword1 = user2.password?.type; // ? - optional chaining проверяет наличие свойства type в password, если есть, то вернет св-во, если нет то вернет undefined
const userPassword2 = user2.password!.type; // ! - убирает ошибку и утверждает, что св-во type 100% есть в password, лучше не использовать
