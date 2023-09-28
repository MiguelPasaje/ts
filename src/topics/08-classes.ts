export class Person {
  constructor(public name: string, private address: string = "no address") {
    this.name = name;
    this.address = address;
  }
}

const p = new Person("ok");

console.log(p);


// export class Hero extends Person{
//     constructor(
//         public aleterEgo: string,
//         public age: number,
//         public realNAme: string
//     ){
//         super(realNAme,'new york');
//     }
// }

export class Hero {
    
   // public person:Person;

    constructor(
        public aleterEgo: string,
        public age: number,
        public realNAme: string,
        public person:Person
    ){
       // this.person = new Person(realNAme);
        
    }
}

const Tony = new Person('Tony stark','pasto')
const ironman = new Hero ('ironman',45,'Tony Star',Tony)

console.log(ironman);
