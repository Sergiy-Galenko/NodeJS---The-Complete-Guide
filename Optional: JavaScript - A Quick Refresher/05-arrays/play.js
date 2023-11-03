const person = {
  name: 'Sergii',
  age: 19,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['PC game', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
