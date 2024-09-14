import { NavigationBar } from "@/components/NavigationBar";
import { HeroSection } from "../components/HeroSection";
// import { ThirdSection } from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import { Footer } from "@/components/Footer";
// import { SecondSection } from "@/components/SecondSection";


export default function Home() {
    return (
        <div className="grid relative">
            <div className="fixed top-0 w-full z-10">
                <NavigationBar />
            </div>
            {/* bg-gradient-to-bl from-[#709a5a] to-[#4f9039] */}
            <div className="pt-auto min-h-screen">
                <HeroSection />
                {/* <SecondSection /> */}
                {/* <div className="h-20"></div> */}
                <FourthSection />
                <Footer />
            </div>
        </div>
    )

}