import './Style.css'
import displayImg from './restauranfood.jpg'

function Hero() {
  return (
    <section className="primary-bg-color-green hero">
      <div className="content">
        <div>
          <h2 className="font-karla primary-color-yellow">Little Lemon</h2>
          <h3 className="secondary-color-grey">Chicago</h3>
        </div>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <button className="font-karla primary-bg-color-yellow primary-color-green">Reserve a table</button>
      </div>
      <div>
        <img src={displayImg} alt="Our restaurant food presentation"/>
      </div>
    </section>
  )
}

export default Hero
