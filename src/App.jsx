import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
