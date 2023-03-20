import './TestimonialCardStyle.css'

function TestimonialCard(props) {
  return(
    <div className="testimonial-card font-karla secondary-bg-color-white">
      <div>
        <p>Rating {props.item.rating}</p>
      </div>
      <div className="info">
        <div className="info-image">
          <img src={props.item.img} alt="Client" />
        </div>
        <div className="info-text">
          <div>
            <p>{props.item.name}</p>
          </div>
          <div>
            <p>{props.item.testimonial}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
