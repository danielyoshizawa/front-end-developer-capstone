import './Style.css'

function OccasionCard(props) {
  return(
    <div className="card secondary-bg-color-grey primary-color-green">
      <img src={props.item.img} alt={props.item.alt} />
      <div className="info">
      <p>{props.item.name}</p>
        <p>${props.item.price}</p>
      </div>
      <div className="order">
        <label>
          <input type="checkbox" />
          Order Now
        </label>
      </div>
    </div>
  )
}

export default OccasionCard
