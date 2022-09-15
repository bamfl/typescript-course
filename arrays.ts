const skills: string[] = ['front', 'back'];
const skills2: Array<string> = ['front', 'back'];

skills.push('wedwed');

for (const value of skills) {
  console.log(value);
}

for (const idx in skills) {
  console.log(idx);
}
