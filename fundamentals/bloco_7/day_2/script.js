// SECTION Parte I - Adicionando keys
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer);
// NOTE Forma 1 = objeto.nomeDaPropriedade
customer.lastName = 'Guima';
console.log(customer);

// NOTE Forma 2 = objeto[variavelQueContemONomeDaPropriedade]
customer['fullName'] = `${customer.firstName} ${customer.lastName}`;
console.log(customer);
// !SECTION
console.log('\n');
// SECTION Parte II - Object.keys

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`
    );
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
// !SECTION
console.log('\n');
// SECTION - Parte III - Object.values

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for (skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

// !SECTION
console.log('\n');
// SECTION Parte IV - Object.entries
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };
// !SECTION
console.log('\n');
// SECTION Parte V - Object.assign

// !SECTION
