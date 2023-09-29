export interface Passenger{
    name: string
    children?: string[]
}

const passenger1: Passenger = {
    name:'Miguel',
}

const passenger2:Passenger = {
    name: 'Miguel2',
    children:['juli','juli2']
}

// const printChildren = (passenger: Passsenger) =>{
const returnChildrenNumber = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name,{howManyChildren});
    // const howManyChildren = passenger.children!.length;
    return howManyChildren;
}

// printChildren(passenger2)
// printChildren(passenger1)
returnChildrenNumber(passenger2)
returnChildrenNumber(passenger1)