export function whatsMyTyooe<T>(argument:T):T{

    return argument
}

const amIstring = whatsMyTyooe<string>('ho world')
const amINumber = whatsMyTyooe<number>(100)
const AmIArray  = whatsMyTyooe<number[]>([1,2,3,4])


console.log(amIstring);
console.log(amINumber);
console.log(AmIArray);
