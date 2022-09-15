// Tuple - Кортеж
const skill: [number, string] = [1, 'Dev']; // Четкое описание структуры массива

const [id, skillName] = skill;

console.log(id, skillName);

const skill2: [number, string, ...boolean[]] = [1, 'Dev', true, false]; // Четкое описание структуры массива, затем идет Spread boolean, котороый может быть бесколнечного количества или не быть вовсе

