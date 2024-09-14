import { NavigationBar } from "@/components/NavigationBar";
import { HeroSection } from "../components/HeroSection";
import { ThirdSection } from "@/components/ThirdSection";
// import { SecondSection } from "@/components/SecondSection";


export default function Home() {
    return (
        <div className="grid relative">
            <div className="fixed top-0 w-full">
                <NavigationBar />
            </div>
            {/* bg-gradient-to-bl from-[#709a5a] to-[#4f9039] */}
            <div className="pt-20 min-h-screen">
                <HeroSection />
                {/* <SecondSection /> */}
                <ThirdSection />
            </div>
        </div>
    )

}