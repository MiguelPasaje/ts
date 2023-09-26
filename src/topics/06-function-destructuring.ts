export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};
const tablet: Product = {
  description: "Aipad Air",
  price: 250.0,
};
interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number,number] {
// function taxCalculation({tax,products}: TaxCalculationOptions): [number,number] {
  let total = 0;

  const { tax, products } = options;

  /*  
   products.forEach(product => {
        total += product.price
    }) 
    */
    products.forEach(({price}) => {
        total += price;
    }); 

  return [total, total * tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15; //impuesto sobre la venta

const result = taxCalculation({
  tax,
  products: shopingCart,
});

//destructuring
const [total, totaltax] = taxCalculation({
  tax,
  products: shopingCart,
});

//const {t,t2} = result

console.log({ result });
console.log({ total, totaltax });

