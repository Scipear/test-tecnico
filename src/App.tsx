import './App.css'
import { About } from './components/About'
import { Benefits } from './components/Benefits'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/NavBar'
import { Order } from './components/Order'
import { Products } from './components/Products'

function App() {

  return (
    <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "Inter, sans-serif" }}>
      <main>
        <Navbar />
        <Hero />
        <Benefits />
        <Products />
        <Order />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
