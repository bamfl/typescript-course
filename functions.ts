function getFullname(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

const getFullnameArrow = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

console.log(getFullname('Dmitriy', 'Petukhov'))
console.log(getFullnameArrow('Dmitriy', 'Petukhov'))
