
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
import { Helmet } from "react-helmet"
import { useTheme } from "./hook/useTheme"



function App() {

  const { dark } = useTheme()
  return (
    <>
      <Helmet>
        {/* Head content goes here */}
        <title>RCN - Reliable Internet Service Provider</title>
        <meta name="description" content="RCN offers fast, reliable, and affordable internet services to homes and businesses. Enjoy high-speed broadband, seamless connectivity, and exceptional customer support." />
        <meta name="keywords" content="RCN, internet service provider, broadband, high-speed internet, reliable internet, affordable internet services, fiber optic, Wi-Fi" />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="http://mysite.com" /> */}
      </Helmet>
      <div className={`font-primary overflow-hidden ${dark ? 'bg-[#0C0C0C]' : 'bg-white'}`}>
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
