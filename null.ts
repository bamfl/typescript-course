const n: null = null;
const n1: any = null;
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

interface User10 {
	name: string;
}

function getUser() {
	if (Math.random() > 0.5) {
		return null;
	} else {
		return {
			name: 'Вася'
		} as User10
	}
}

const user33 = getUser();

if (user33) {
	const n55 = user33.name;
}