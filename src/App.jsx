import { Navbar } from "./components/navbar/Navbar"
import homeAni from "./assets/home.json"
import Lottie from "lottie-react"

function App() {
  return (
    <div className="w-full bg-white font-inter overflow-hidden " >
      <Navbar />
      <div className="min-h-screen backdrop-blur-sm max-w-screen-xl mx-auto w-full px-4 md:px-10 flex items-center justify-center flex-col py-20" >
        <div className="w-[800px]" ><Lottie animationData={homeAni} /></div>
        <h1 className="relative -top-32 mt-5 font-semibold sm:font-bold text-3xl sm:text-4xl lg:w-2/3 text-center text-slate-700" >Get ready to cast your vote in the wildest meme coin showdown!</h1>
        <button type="button" className="-top-32 bg-gradient-to-tl from-blue-400 to-blue-600 text-white text-lg mt-5 px-4 py-2 rounded-md font-medium hover:shadow-xl relative transition-all inline-block duration-300 " >Vote Now</button>
      </div>
    </div>
  )
}

export default App
