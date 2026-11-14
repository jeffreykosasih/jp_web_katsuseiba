import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Locations from "@/components/Locations";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Menu />
        <Story />
        <Locations />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
