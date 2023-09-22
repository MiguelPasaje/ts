

interface Product{
    description: string
    price: number
}

const phone:Product = {
    description:'Nokia A1',
    price: 150.0
}
const tablet:Product = {
    description:'Aipad Air',
    price: 250.0
} 
interface TaxCalculationOptions{
    tax:number
    products: Product[]
}

function taxCalculation(options:TaxCalculationOptions):number[]{
    let total = 0

    options.products.forEach(product => {
        total += product.price
    })

    return [total, total * options.tax]
}

const shopingCart = [phone,tablet]
const tax = 0.15; //impuesto sobre la venta

const result = taxCalculation({
    tax,
    products: shopingCart
})

console.log({result});


export{}