import Image from "next/image";

export function SecondSection() {
    return (
        <div className="grid place-content-center p-20 h-screen relative">
            <Image className=" px-10 rounded-3xl"
                alt="Tractor"
                src="/tractor.png"
                objectFit="cover"
                layout="fill"
            />
            <div className="z-10">
                <span className="text-2xl">Sowing Sustainability,Reaping Prosperity</span>
                <p>The Varhad Groups mission is to offer sustainable business opportunities to
                    rural agricultural population by making them partners in various initiative and
                    sharing the benefits equitably.
                </p>
            </div>
        </div>
    )
}