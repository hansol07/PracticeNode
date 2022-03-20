var won =1000;
const result = '이 과자는 ${won}원입니다.';
console.log(result); 

const relationship2 = {
  name: 'zero',
  friends:['nero', 'hero','xero'],
  logFriends(){
      this.friends.forEach(friend => {
          console.log(this.name,friend);
      });
  },};
relationship2.logFriends();


const example = {a:123 , b: {c: 135, d: 146}};
const {a,b:{d}} = example;
console.log(a);
console.log(d);

class Human {
  constructor(type ='human') {
    this.type=type;
  }
  static isHuman(human){
    return human instanceof Human;
  }
  breathe(){
    alert("breathe");
  }
}

class Zero extends Human {
  constructor(type, firstName , lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName(){
    super.breathe();
    alert('${this.firstName} ${this.lastName}');
  }
}
const newZero = new Zero('human','jun','hansol');
Human.isHuman(newZero);