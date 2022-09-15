const arr: (string | number | boolean)[] = ['wfewf', 1, true];

const logId = (id: string | number): void => {
  if (typeof id === 'string') {
    console.log(id); // string
  } else if (typeof id === 'number') {
    console.log(id); // number
  } else {
    console.log(id); //boolean
  }
}

function logError(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err);
	} else {
		console.log(err);
	}
}

function logObject(obj: { a: number } | { b: number }) {
	if ('a' in obj) {
		console.log(obj.a);
	} else {
		console.log(obj.b);
	}
}

function logMultipleIds(a: string | number, b: string | boolean) {
	if (a === b) {
    // a. b string
	} else {
		console.log(a);
	}
}

const a = 1; // 1
let b = 1; // number
