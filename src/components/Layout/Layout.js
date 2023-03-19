import './Style.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Layout(props) {
  return(
    <div className="Main-Layout">
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
