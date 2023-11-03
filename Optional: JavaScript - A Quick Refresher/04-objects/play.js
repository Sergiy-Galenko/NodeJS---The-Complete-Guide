const person = {
  name: 'Sergii',
  age: 19,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();
