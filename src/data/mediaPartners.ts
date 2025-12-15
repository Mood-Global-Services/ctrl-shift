import p5 from '@/assets/images/partners/cryptoNews.webp'
import p7 from '@/assets/images/partners/criptogirl.webp'
import p9 from '@/assets/images/partners/breaking.webp'
import p10 from '@/assets/images/partners/beincrypto.webp'
import p11 from '@/assets/images/partners/Investing_napoli.webp'
import p12 from '@/assets/images/partners/cryptopub.webp'
import p13 from '@/assets/images/partners/RBW.webp'
import p14 from '@/assets/images/partners/pizzadao.webp'
import p15 from '@/assets/images/partners/cryptobears.webp'
import p16 from '@/assets/images/partners/coinrank.webp'
import p17 from "@/assets/images/partners/cryptonomist.webp"
import p18 from "@/assets/images/partners/coineasy.webp"

export interface Partner {
    name: string;
    logo: string;
    link: string;
    percentage: string;
    mobilePercentage: string;
    color: string;
    invert?: boolean;
}

export const MediaPartnersList: Partner[] = [
    {
        name: 'BeInCrypto',
        logo: p10.src,
        link: 'https://it.beincrypto.com/',
        percentage: '120%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Crypto News',
        logo: p5.src,
        link: 'https://cryptonews.com/',
        percentage: '150%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Crypto Pub',
        logo: p12.src,
        link: 'https://x.com/ilcryptopub_?lang=en',
        percentage: '140%',
        mobilePercentage: '50%',
        color: '',
    },
    {
        name: 'Investing Napoli',
        logo: p11.src,
        link: 'https://investingnapoli.it/',
        percentage: '90%',
        mobilePercentage: '70%',
        color: '',
    },
    {
        name: 'Blockchain Week Rome',
        logo: p13.src,
        link: 'https://blockchainweekrome.com/en/',
        percentage: '100%',
        mobilePercentage: '75%',
        color: '',
    },
    {
        name: 'Pizza DAO',
        logo: p14.src,
        link: 'https://www.instagram.com/pizza_dao/',
        percentage: '180%',
        mobilePercentage: '60%',
        color: '',
    },
    {
        name: 'Criptogirl',
        logo: p7.src,
        link: 'https://www.criptogirl.com/',
        percentage: '120%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Crypto Bears',
        logo: p15.src,
        link: 'https://www.cryptobears.it/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Coinrank',
        logo: p16.src,
        link: 'https://www.coinrank.io/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Crypto Breaking News',
        logo: p9.src,
        link: 'https://www.cryptobreaking.com/',
        percentage: '120%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'Cryptonomist',
        logo: p17.src,
        link: 'https://en.cryptonomist.ch/',
        percentage: '110%',
        mobilePercentage: '100%',
        color: '',
    },
    {
        name: 'CoinEasy',
        logo: p18.src,
        link: 'https://www.coineasy.xyz/',
        percentage: '100%',
        mobilePercentage: '100%',
        color: '',
    },

]
