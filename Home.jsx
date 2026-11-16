import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import DashboardPreview from "../components/dashboard/DashboardPreview";
import Testimonials from "../components/testimonials/Testimonials";


import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <DashboardPreview />

      <Testimonials />



      <Footer />
    </>
  );
};

export default Home;