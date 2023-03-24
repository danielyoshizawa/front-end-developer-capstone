import './Style.css'
import OccasionCard from './OccasionCard'
// TODO = Refactor to a more dynamic way
import greek from './Images/greek_salad.jpg'
import bruchetta from './Images/bruchetta.svg'
import lemonDessert from './Images/lemon_dessert.jpg'

// TODO : Same as the specials, should be extracted
const items = [
  {
    name : "Greek Salad",
    price : "12.99",
    description: "The famous greek salad of cripsy lettuce, pepper, olives and our Chicago Style feta cheese, grarnished with crunchy garlic and rosemary croutons.",
    img: greek,
    alt: "Greek Salad",
  },
  {
    name : "Bruchetta",
    price : "5.99",
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and sessoned with salt and olive oil.",
    img: bruchetta,
    alt: "Bruchetta",
  },
  {
    name : "Lemon Dessert",
    price : "5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined.",
    img: lemonDessert,
    alt: "Lemon Dessert",
  }
]

function OccasionMenu({handleInputChange}) {
  return(
    <div className="occasion-menu primary-bg-color-green secondary-color-grey">
      <div className="selection">
        <div>
          <h2>Select Occasion</h2>
        </div>
        <div>
          <select name="occasion" className="primary-color-green" onChange={handleInputChange}>
            <option>Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Casual</option>
          </select>
        </div>
      </div>
      <div className="menu">
        <h3>Occasion Menu</h3>
        <div className="cards">
          {items.map((item) =>
            <OccasionCard
              key={item.name}
              item={item}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default OccasionMenu
