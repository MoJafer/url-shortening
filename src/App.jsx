import Header from "./components/Header"
import Statistics from "./components/Statistics"
import bgBoostDesktop from './assets/images/bg-boost-desktop.svg'
import Footer from "./components/Footer"
// import FadeInSection from "./components/FadeInSection"

function App() {
  return (
    <div>
      <Header />
      <Statistics />

      <section className="w-full h-[220px] p-10 flex flex-col items-center justify-center text-white bg-primary-violet bg-cover " style={{ backgroundImage: `url(${bgBoostDesktop})` }}>
        <h1 className="text-4xl mb-10">عزز روابط الآن</h1>
        <a className="bg-primary-cyan px-14 font-bold text-xl py-4 rounded-full">ابدأ الآن</a>
      </section>
      <Footer />

    </div>
  )
}

export default App
