import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Features />
      <Products />
      <Testimonials/>
      <Footer />
    </main>
  )
}

export default App
