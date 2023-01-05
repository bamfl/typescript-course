// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

interface IPerson {
  id: number;
  [key: string]: any;
}

const data: IPerson[] = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

const mySort = <T extends IPerson>(data: T[], isDesc: boolean): T[] => {
  const sortedData = data.sort((a, b) => a.id - b.id);
  return isDesc ? sortedData.reverse() : sortedData;
}

console.log(mySort(data, true));
console.log(mySort(data, false));
