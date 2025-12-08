import p1 from '@/assets/images/partners/ETHDam.webp'
import p2 from '@/assets/images/partners/ethzurich.webp'
import p3 from '@/assets/images/partners/ethbucharest.webp'
import p4 from '@/assets/images/partners/Eth Dublino Irlanda.webp'
import p5 from '@/assets/images/partners/ETH Cluj Napoca Romania .webp'
import p8 from '@/assets/images/partners/ETH ROME.webp'
import p17 from '@/assets/images/partners/ETHWarsaw Polonia.webp'
import p21 from "@/assets/images/partners/ETHBratislava.webp"
import p22 from '@/ assets/images/partners/SpaghettETH.webp'


export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    mobilePercentage: string;
    color: string;
    invert?: boolean;
}

export const ETHFamilyList: Partner[] = [
    {
        name: 'ETH Dam',
        logo: p1.src,
        link: 'https://www.ethdam.com/',
        percentage: '47%',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'ETH Roma Italia',
        logo: p8.src,
        link: 'https://www.ethrome.org/',
        percentage: '85%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'ETH Dublino Irlanda',
        logo: p4.src,
        link: 'https://www.ethdublin.io/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'SpaghettETH',
        logo: p22.src,
        link: 'https://www.spaghett-eth.com/',
        percentage: 'contain',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'ETH Zurich',
        logo: p2.src,
        link: 'https://ethz.ch/en.html',
        percentage: '47%',
        mobilePercentage: '40%',
        color: '',
    },
    {
        name: 'ETH Bucharest',
        logo: p3.src,
        link: 'https://ethbucharest.ro/',
        percentage: '75%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'ETH Cluj Napoca Romania',
        logo: p5.src,
        link: 'https://www.ethcluj.org/',
        percentage: '85%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'ETH Bratislava',
        logo: p21.src,
        link: 'https://ethbratislava.com/',
        percentage: '70%',
        mobilePercentage: '80%',
        color: '',
    },
    {
        name: 'ETH Warsaw Polonia',
        logo: p17.src,
        link: 'https://www.ethwarsaw.dev/',
        percentage: '50%',
        mobilePercentage: '50%',
        color: '',
    },
]

