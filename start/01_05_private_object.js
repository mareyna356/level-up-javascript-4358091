// Write your code here
/*
class User {
  //Private fields
  #username;
  #password;

  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

const user = new User("Maroc", "pass", 24);
*/

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Marco",
  [password]: "pass",
  age: 24,
};

console.log(user.username);
console.log(user.password);
console.log(user.age);
