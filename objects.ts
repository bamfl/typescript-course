type User = {
  firstName: string,
  lastName: string,
  city: string,
  age: number
}

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  city: 'San Francisco',
  age: 30
}

const getUserFullname = (user: User): string => `${user.firstName} ${user.lastName}`;

console.log(getUserFullname(user));
