import './App.css'
import Features from './components/Features'
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
    </main>
  )
}

export default App
