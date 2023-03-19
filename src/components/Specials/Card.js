import './CardStyle.css'

function Card(props) {
  return(
    <article className="menu-card secondary-bg-color-grey">
      <img src={props.item.img} alt={props.item.alt} />
      <article className="header">
        <p>{props.item.name}</p>
        <p>${props.item.price}</p>
      </article>
      <article className="description">
        {props.item.description}
      </article>
      <article className="action">
        <p>Order a delivery</p>
      </article>
    </article>
  )
}

export default Card
