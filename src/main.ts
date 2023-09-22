import './style.css'
import { setupCounter } from './counter.ts'

// import './topics/01-basic.types'
// import './topics/02-object-interface'
// import './topics/03-functions.ts'
import './topics/04-homework-types.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
