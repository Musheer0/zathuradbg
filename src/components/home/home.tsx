
import WhyZatura from "./why"
import Hero from "./hero"
import Links from "./link"
import Navbar from "../navbar"
const Home = () => {
  return (
   <>
         <Navbar/>

    <Hero/>
    <WhyZatura/>
    <Links className="sm:hidden flex fixed bottom-5  left-1/2 -translate-x-1/2" side="top"/>
   </>
)
}

export default Home