import { UsersRound } from 'lucide-react';
import Image from "next/image";
import { ThirdSection } from './ThirdSection';

export default function FourthSection() {
    return (
        <div className="p-2">
            <div className="flex relative">
                <div className="relative w-64">
                    <div className="sticky top-20 grid gap-2 p-2">
                        <div className="border p-2">
                            <span>{"From Soil to Sky"}</span>
                        </div>
                        <div className="border p-2">
                            <span>{"Transforming Rural Communities"}</span>
                        </div>
                        <div className="border p-2">
                            <span>{"Sowing Sustainability,Reaping Prosperity"}</span>
                        </div>
                        <div className="border p-2">
                            <span>{"Biochar"}</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    {/* From soil  */}
                    <section className="mb-10 min-h-screen">
                        <div className="grid">
                            <span className="text-3xl font-sans font-extrabold ">{"From Soil to Sky"}</span>
                            <span className="text-xl flex items-center">
                                {/* <ArrowRightIcon /> */}{"  "}
                                {" Varhad Capital's Climate-Resilient Agricultural Impact"}
                            </span>
                            <span className="p-10 text-lg">
                                {"Leading the initiatives in carbon dioxide removal (CDR) and soil enhancement. We cultivated a vast network of farmers through 165 farmer cooperatives in India. Using carbon-rich materials like cotton and pigeon pea stalks, we achieved a Carbon Dioxide Removal rate of 2.4 tons of CO2 per ton of biochar.Our proprietary kon-tiki kilns, capable of using cotton and pigeon pea stalks, having already yielded biochar across Gujarat and Maharashtra. Further, we’ve empowered local farmers, who, under third-party professional guidance, became certified Artisanal-Pro members adhering to international biochar standards."}
                            </span>
                        </div>
                        <div className="flex justify-between h-80">
                            <div className="max-w-64 grid gap-2 h-fit">
                                {/* <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Vast network of 550,000 Farmers"}</span>
                                </div> */}
                                <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Yielded 300 tons of Biochar in 60 days"}</span>
                                </div>
                                <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Removal rate of 2.4 tons of CO2 per ton of biochar"}</span>
                                </div>
                                {/* <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Trained 30 artisans and signed MoU with 6 Artisan Pro's"}</span>
                                </div> */}
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-60 h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/carbon.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div>
                                <div className="w-60 h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/farmer2.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div>
                                <div className="w-60 h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/farmer1.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Transforming Rural Communities */}
                    <section className="mb-10 min-h-screen">
                        <div className="grid">
                            <span className="text-3xl font-sans font-extrabold ">
                                {"Transforming Rural Communities"}
                            </span>
                            <span className="text-xl flex items-center">
                                {/* <ArrowRightIcon /> */}{"  "}
                                {"Varhad Capital & Varhad FCS"}
                            </span>
                            <span className="p-10 text-lg">
                                {"The Varhad Group comprises two companies: Varhad Capital Pvt Ltd, dedicated to incubating 1000 Farmer Producer Companies (FPCs) for one million farmers across India with services like e-commerce and logistics, and Varhad FCS Pvt Ltd, which supports 1000 Artisan Producer Companies (APCs) for artisans through services such as e-commerce, logistics, and training. Over a decade, the Varhad Group has empowered rural communities by fostering sustainable business models and ensuring equitable returns for stakeholders in agriculture and artisan sectors"}
                            </span>
                        </div>
                        <div className="flex justify-between h-80">
                            <div className="flex items-center gap-4 ">
                                <div className="w-[32em] h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/tractor.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div>
                                {/* <div className="w-60 h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/farmer4.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div> */}
                                <div className="w-60 h-full border relative rounded-3xl overflow-hidden shadow-lg shadow-gray-400">
                                    <Image
                                        src="/farmer6.png"
                                        alt="One Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute"
                                    />
                                </div>
                            </div>
                            <div className="max-w-64 grid gap-2 h-fit">
                                <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Vast network of 550,000 Farmers"}</span>
                                </div>
                                {/* <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Yielded 300 tons of Biochar in 60 days"}</span>
                                </div>
                                <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Removal rate of 2.4 tons of CO2 per ton of biochar"}</span>
                                </div> */}
                                <div className="border p-2 flex gap-2 items-center rounded-2xl shadow shadow-gray-200 font-semibold">
                                    <UsersRound />
                                    <span>{"Trained 30 artisans and signed MoU with 6 Artisan Pro's"}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10 min-h-screen">
                        <div className="grid">
                            <span className="text-3xl font-sans font-extrabold ">
                                {"Sowing Sustainability, Reaping Prosperity"}
                            </span>
                            <span className="text-xl flex items-center">
                                {/* <ArrowRightIcon /> */}{"  "}
                                {/* {"Varhad Capital & Varhad FCS"} */}
                            </span>
                            <span className="p-10 text-lg">
                                {"The Varhad Group's mission is to offer sustainable business opportunities to rural agricultural population by making them partners in various initiative and sharing the benefits equitably."}
                            </span>
                        </div>
                        <div>
                            <ThirdSection />
                        </div>
                    </section>

                    <section className="mb-10 min-h-screen">
                        <div className="grid">
                            <span className="text-3xl font-sans font-extrabold ">
                                {"Biochar"}
                            </span>
                            <span className="text-xl flex items-center">
                                {/* <ArrowRightIcon /> */}{"  "}
                                {" Nurturing Soil, Sustaining Earth"}
                            </span>
                            <span className="p-10 text-lg">
                                {"Biochar, created by heating biomass in low-oxygen conditions, enhances soil fertility, water retention, and drought resilience. Pigeon pea stalk-derived biochar boasts high fixed carbon levels, effectively sequestering carbon in the soil."}
                            </span>
                        </div>
                        <div className='h-auto'>
                            <BioCharImages />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

function BioCharImages() {
    return (
        <div className='grid grid-rows-3 grid-cols-4 min-h-[60vh] px-10'>
            <div className='row-span-3 col-span-1 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQEpoc2AQgdP1Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1717216705738?e=1729123200&v=beta&t=UTdNULUUYJUnFAw4W7oFCjhxVgsghXZT9q7H6RFbkAw"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-2 row-span-1 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQFdCNi4IdxcVg/feedshare-shrink_1280/feedshare-shrink_1280/0/1717216703017?e=1729123200&v=beta&t=xiEIzVtO-uNCnPbz6mru8hKOkivBp-GbIPy37Z43cL0"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-1 row-span-2 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQE3NEUA0FTz6w/feedshare-shrink_1280/feedshare-shrink_1280/0/1715097470041?e=1729123200&v=beta&t=4W2mthPslyhkbcWD4v_Kqxrjf8xmPc_4SNuRUB6WpwY"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-1 row-span-2 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQGzZX3Zb5x5Lw/feedshare-shrink_1280/feedshare-shrink_1280/0/1718339194272?e=1729123200&v=beta&t=RGY__et_Dasih2ieMtOGFWhri90KJnVyHxXZ1TF-_kU"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-1 row-span-1 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQHlDRkCgz39Dg/feedshare-shrink_1280/feedshare-shrink_1280/0/1715097451631?e=1729123200&v=beta&t=eSwBu5_NTfoQ7o4B343UMPIyiNIoDcdyf2GY1g9xfCQ"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-1 row-span-1 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D4D22AQETw-CsNrop1Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717641179501?e=1729123200&v=beta&t=bz23QVhE5WEbMEEcIivC_OI2WU2OQLbU3bEYjSazN3c"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            <div className='col-span-1 row-span-1 w-auto m-2 border relative rounded-xl overflow-hidden shadow-md'>
                <Image
                    src="https://media.licdn.com/dms/image/v2/D5622AQFJhXgU6xuCTQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716547469636?e=1729123200&v=beta&t=DMn2LAc6ZcWPBKknF3mrkXiIkXZ1Wb_KW3-zPfJPL_k"
                    alt="One Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
        </div>
    )
}


