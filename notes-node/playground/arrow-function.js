var square = (x) => x*x;
console.log(square(9));

var user = {
  name: 'bzhang',
  sayHi: () => {
    console.log(`hi. I'm ${this.name}`);
  },
  sayHiAlt(){
    console.log(`hi. I'm ${this.name}`);
  }

};

user.sayHi();
user.sayHiAlt();
