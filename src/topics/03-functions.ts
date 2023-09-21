
function addNumbers(a:number,b:number):number{
    return a + b
}

const  result:number = addNumbers(1,2)

console.log({result});


const addNumbersArrow = (a:number,b:number):string =>{
    return `${a + b}`

}

const  result2:string = addNumbersArrow(2,5)

console.log({result2});


function multiply(firstNumbwe:number,secondNumbwe?:number,base:number = 2) {
    return firstNumbwe * base;
}
const multiplyresult:number = multiply(5)

console.log({multiplyresult});

interface Character{
    name:string
    hp:number;
    showHp:()=> void
}

const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const strider: Character={
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
        
    }
}

healCharacter(strider, 50)
healCharacter(strider, 50)
healCharacter(strider, 50)

strider.showHp()

export {};