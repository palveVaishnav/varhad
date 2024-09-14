import { TreePalm, Factory } from 'lucide-react';

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from 'next/image';

const features = [
    {
        Icon: Factory,
        name: "CDR Removal",
        description: "In the realm of Carbon Dioxide Removal (CDR), Varhad Capital Pvt Ltd has set a remarkable standard",
        href: "/",
        cta: "Learn more",
        background: <Image
            // src="https://media.licdn.com/dms/image/v2/D4D22AQGAMkaL_9Y81A/feedshare-shrink_800/feedshare-shrink_800/0/1717216703033?e=1729123200&v=beta&t=zCZQAToyaetWDwFbt72dzzupVyzuqHujXQXa76zMoY8"
            src={'/carbon.png'}
            alt='Biochar Image'
            layout='fill'
            objectFit='cover'
            className="absolute hover:opacity-50 opacity-100"
        />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: TreePalm,
        name: "Biochar Projects",
        description: "Unlocking Sustainable Solutions: Exploring Biochar Projects for a Greener Tomorrow.",
        href: "/",
        cta: "Learn more",
        background: <Image
            // src="https://media.licdn.com/dms/image/v2/D4D22AQGAMkaL_9Y81A/feedshare-shrink_800/feedshare-shrink_800/0/1717216703033?e=1729123200&v=beta&t=zCZQAToyaetWDwFbt72dzzupVyzuqHujXQXa76zMoY8"
            src={'/biochar1.png'}
            alt='Biochar Image'
            layout='fill'
            objectFit='cover'
            className="absolute hover:opacity-50 opacity-100"
        />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
];

export async function HeroBento() {

    return (
        <BentoGrid className="grid grid-cols-2">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
