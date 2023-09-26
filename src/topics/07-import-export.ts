import {Product,taxCalculation} from './06-function-destructuring'

const shopingCart:Product[] = [
    {
        description:'Nokia',
        price:100
    },{
        description:'ipad',
        price:150
    }
]

const [total, totaltax] = taxCalculation({
    tax:0.15,
    products: shopingCart,
  });

console.log(total,totaltax);
