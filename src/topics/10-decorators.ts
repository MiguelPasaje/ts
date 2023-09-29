function classDecorator<T extends {new (...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty = 'New Property'
        Hello = 'override'
    }
}

@classDecorator
class SuperClass{
    public myProperty:string = 'Abc123'
    print(){
        console.log('hi guys');
        
    }
}

console.log(SuperClass);

const myClass = new SuperClass()
console.log(myClass)
    
  