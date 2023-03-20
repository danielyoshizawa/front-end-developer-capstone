import './Style.css'
import TestimonialCard from './TestimonialCard'
import george from './Images/george.jpg'
import betina from './Images/betina.jpg'
import jhonny from './Images/jhonny.jpg'

const testimonials = [
  {
    name: "George",
    testimonial: "Great Food, Great People",
    rating: "5.0",
    img: george,
  },
  {
    name: "Betina",
    testimonial: "Had a great time here!",
    rating: "4.7",
    img: betina,
  },
  {
    name: "Jhonny",
    testimonial: "High quality food!",
    rating: "4.9",
    img: jhonny,
  }
]

function Testimonials() {
  return(
    <section id="testimonials" className="testimonials primary-bg-color-green">
      <div className="title font-karla secondary-color-white">
        <h1>Testimonials</h1>
      </div>
      <div className="cards">
        { testimonials.map((item) => <TestimonialCard item={item} key={`card-${item.name}`} />) }
      </div>
    </section>
  )
}

export default Testimonials
