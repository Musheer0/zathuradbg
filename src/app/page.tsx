import Features from '@/components/home/features';
import Home from '@/components/home/home'
import AboutZatura from '@/components/home/about';
import GitHubStars from '@/components/stars';
import Footer from '@/components/home/footer';
import FAQSection from '@/components/home/faqs';
import TechStackCards from '@/components/home/tech-stack-card';
import Navbar from "@/components/navbar";
import MobileNav from "@/components/home/mobile-nav";

export default function page() {
  return (
   <>
 <Navbar/>
      <MobileNav/>
   <Home/>
   <GitHubStars/>
  <TechStackCards/>
   <Features/>
   <AboutZatura/>
   <FAQSection/>
   <Footer/>
   </>
  );
}
