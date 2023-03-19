import './Style.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import displayImg from './restauranfood.jpg'

function Hero() {
  return (
    <section class="primary-bg-color-green hero">
      <div class="content">
        <div>
          <h2 class="font-karla primary-color-yellow">Little Lemon</h2>
          <h3 class="secundary-color-white">Chicago</h3>
        </div>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
        <Button class=" font-karla primary-bg-color-yellow primary-color-green" size='md'>Reserve a table</Button>
      </div>
      <div>
        <img src={displayImg} alt="Image of our restaurant food presentation"/>
      </div>
    </section>
  )
}

export default Hero
