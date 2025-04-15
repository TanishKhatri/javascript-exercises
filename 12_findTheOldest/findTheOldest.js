const findTheOldest = function (people) {
  
  let oldestPersonAge = 0;
  let oldestPerson;
  let age;
  for (person of people) {
    if (person.yearOfDeath == undefined) {
      const date = new Date();
      age = date.getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    if ((age) > oldestPersonAge) {
      oldestPersonAge = age;
      oldestPerson = person;
    } 
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
