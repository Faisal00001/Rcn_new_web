
import { Toaster } from "react-hot-toast"
import CheckSpeed from "./components/CheckSpeed"
import Contact from "./components/Contact"
import CovergaeArea from "./components/CovergaeArea"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsAndBlogs from "./components/NewsAndBlogs"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"



function App() {


  return (
    <>
      <div className="font-primary overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <CovergaeArea />
        <CheckSpeed />
        <NewsAndBlogs />
        <FAQ />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  )
}

export default App
