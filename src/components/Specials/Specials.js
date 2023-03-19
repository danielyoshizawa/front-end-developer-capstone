import './Style.css'
import Card from './Card'
// TODO = Refactor to a more dynamic way
import greek from './Images/greek_salad.jpg'
import bruchetta from './Images/bruchetta.svg'
import lemonDessert from './Images/lemon_dessert.jpg'

const items = [
  {
    name : "Greek Salad",
    price : "12.99",
    description: "The famous greek salad of cripsy lettuce, pepper, olives and our Chicago Style feta cheese, grarnished with crunchy garlic and rosemary croutons.",
    img: greek,
    alt: "Greek Salad Image",
  },
  {
    name : "Bruchetta",
    price : "5.99",
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and sessoned with salt and olive oil.",
    img: bruchetta,
    alt: "Bruchetta Image",
  },
  {
    name : "Lemon Dessert",
    price : "5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined.",
    img: lemonDessert,
    alt: "Lemon Dessert Image",
  }
]

function Specials() {
  return(
    <section id="about" className="specials">
      <article className="header">
        <h1>This week specials!</h1>
        <button className="font-karla primary-bg-color-yellow primary-color-green">Online Menu</button>
      </article>
      <article className="cards">
        {items.map((item) => <Card item={item} key={item.name} />)}
      </article>
    </section>
  )
}

export default Specials
