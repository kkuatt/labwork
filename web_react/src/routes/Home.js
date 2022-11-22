import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero"
    title ="Zharylkhasyn Kuat"
    text = "Programmer"
    buttonText="Examples of work"
    url="/"
    btnClass ="show"
    />

    <Trip/>
    </>
  );
}

export default Home;