import { ArrowDownIcon } from "@radix-ui/react-icons";
import GradualSpacing from "./magicui/gradual-spacing";
import { Button } from "./ui/button";
import { HeroBento } from "./HeroBento";
// import Image from "next/image";

export function HeroSection() {
    return (
        <div className="grid place-content-center min-h-screen relative overflow-hidden mb-20">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 ">
                {/* <Image
                    src={'https://as1.ftcdn.net/v2/jpg/07/53/59/10/1000_F_753591047_p4n9FRwZiQpwcG6M63I8zV8MAhDtGA3o.jpg'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                /> */}
            </div>

            {/* Foreground Content */}
            <div className="p-4 grid gap-4 place-content-center bg-transparent z-10">
                <GradualSpacing
                    className="font-display text-center text-4xl font-bold tracking-[-0.1em]  md:text-7xl md:leading-[5rem]"
                    text="The Varhad Group"
                />
                <div className="font-serif grid place-content-center text-center ">
                    Empowering Farmers, Artisans, and Businesses in India. Incubating 1000 FPCs and APCs, connecting 1 million farmers and artisans.
                </div>
            </div>
            <div className="flex justify-center">
                <Button className="bg-orange-600 hover:bg-orange-600 flex items-center justify-between gap-2 group shadow-3xl transition-all duration-200 absolute bottom-3 right-3 rounded-full">
                    <span>Read More</span>
                    <ArrowDownIcon className="group-hover:scale-110 transition-all group-hover:translate-y-2 rounded-full bg-gray-800" width={25} height={25} />
                </Button>
            </div>

            <div className="bg-transparent">
                <HeroBento />
            </div>
        </div>
    );
}