import './Style.css'
import chefA from './Images/restaurantchefB.jpg'
import chefB from './Images/MarioandAdrianA.jpg'

function About() {
  return(
    <section id="about" className="about">
      <div className="info">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </div>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
      </div>
      <div className="image">
        <img id="chefA" src={chefA} alt="Our chefs" />
        <img id="chefB" src={chefB} alt="Our chefs" />
      </div>
    </section>
  )
}

export default About
