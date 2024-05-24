import logo from "../../assets/logo.webp"
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full border-b border-slate-300 bg-white z-[999]" >
            <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between py-2 px-4 md:px-10" >
                <div className="flex items-center justify-center " >
                    <div className="max-w-12 w-full" ><img src={logo} alt="logo" className="w-full" /></div>
                    <p className="text-2xl font-semibold" >Collective Fun</p>
                </div>
                <div className="flex items-center gap-6" >
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500" ><BiLogoTelegram size={34} /></a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500" ><FaXTwitter size={28} /></a>

                </div>
            </div>
        </div>
    )
}
