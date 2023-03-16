import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import Specials from '../Specials/Specials'
import Testimonials from '../Testimonials/Testimonials'
import About from '../About/About'

function Home() {
  return(
    <Layout>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </Layout>
  )
}

export default Home
