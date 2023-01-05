function identity<T>(data: T): T {
  return data;
}

const identityArrow = <T>(data: T): T => data;

const nums: number[] = [1, 2, 3];
const numsGeneric: Array<number> = [1, 2, 3];

let num = 0;

const getNum = async (): Promise<void> => {
  num = await new Promise<number>((resolve, reject) => resolve(1));
  console.log(num);
}

getNum();

console.log(num);

interface ICheckEngine {
  [key: string]: boolean;
}

const checkEngine: ICheckEngine = {
  drive: true,
  transmission: false
}

const checkEngineGeneric: Record<string, boolean> = {
  drive: true,
  transmission: false
}

const logMiddleware = <T>(data: T): T => {
  console.log(data)
  return data;
}

const res1 = logMiddleware(10);
const res2 = logMiddleware('Hi');
const res3 = logMiddleware(false);

const res4 = logMiddleware<number>(10);
const res5 = logMiddleware<string>('Hi');
const res6 = logMiddleware<boolean>(true);

const getHalfArray = <T>(data: Array<T>): Array<T> => data.slice(0, Math.floor(data.length / 2));

const halfArray = getHalfArray<number>([1, 2, 3]);

const split: <T>(data: T[]) => T[] = getHalfArray;

type splitType = <T>(data: T[]) => T[]

const split2: splitType = getHalfArray;

const getString = <T>(data: T): string | undefined => {
  if (Array.isArray(data)) return data.toString();

  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'boolean':
    case 'bigint':
    case 'function':
    case 'symbol':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
}

getString(true);
getString<number>(21332);

interface ILogObj<T> {
  time: Date;
  data: T
}

type LogObjType<T> = {
  time: Date;
  data: T
}

const logObj: ILogObj<{ a: number }> = {
  time: new Date(),
  data: {
    a: 1
  }
}

const logObj2: LogObjType<{ a: string }> = {
  time: new Date(),
  data: {
    a: 'Go'
  }
}

interface ICar {
  run: number
}

interface ITruck {
  run: number
}

const kmToMiles = <T extends ICar>(car: T): number => {
  return car.run / 0.62;
}

const sumKmToMiles = <T extends ICar, Y extends ITruck>(car: T, truck: Y): number => {
  return (car.run + truck.run) / 0.62;
}
