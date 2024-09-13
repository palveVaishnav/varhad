import { ArrowRightIcon } from "@radix-ui/react-icons";
import GradualSpacing from "./magicui/gradual-spacing";
import { Button } from "./ui/button";
import { HeroBento } from "./HeroBento";

export function HeroSection() {
    return (
        <div className="grid place-content-center">
            <div className="p-4 grid gap-4 place-content-center">
                <GradualSpacing
                    className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    text="The Varhad Group"
                />
                <div className="font-serif grid place-content-center">
                    {'Empowering Farmers, Artisans, and Businesses in India. Incubating 1000 FPCs and APCs, connecting 1 million farmers and artisans'}
                </div>
                <div className="flex justify-center">
                    <Button className="bg-orange-600 hover:bg-orange-600 flex items-center justify-between gap-2 group hover:rounded-2xl shadow-3xl transition-all duration-200">
                        <span>Learn More</span>
                        <ArrowRightIcon className="group-hover:scale-110 transition-all group-hover:translate-x-2" />
                    </Button>
                </div>
            </div>
            <div className="">
                <HeroBento />
            </div>
        </div>
    )
}