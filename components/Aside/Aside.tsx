import { twMerge } from 'tailwind-merge'
import AsideInfo from './AsideInfo'
import BgColor from './BgColor'
import AsideItem from './AsideItem'
import asides from './Aside.constants'

interface AsideProps {
    className?: string
}

const Aside: React.FC<AsideProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-[#232339] h-full relative overflow-hidden', className)}>
            <AsideInfo className='' />
            {
                Object.keys(asides).map((item) => {
                    return <AsideItem className='text-xs' title={item} key={item} contents={asides[item]} />
                })
            }
            <BgColor className='' />
        </div>
    )
}

export default Aside

















{/* <AsideItem className='text-xs' contents={
                [
                    { title: 'Email', description: 'm.sefa06@hotmail.com', imageSource: '/favicon.ico' },
                    { title: 'Website', description: 'www.mrdoorless.com', imageSource: '/favicon.ico' },
                    { title: 'Phone', description: '(+90) 555 881 1783', imageSource: '/favicon.ico' },
                    { title: 'Address', description: 'Istanbul, Turkey', imageSource: '/favicon.ico' }
                ]
            } />
            <AsideItem className='text-xs' contents={
                [
                    { title: 'Instagram', description: '@sefakpsz', imageSource: '/favicon.ico' },
                    { title: 'Github', description: '@sefakpsz', imageSource: '/favicon.ico' },
                    { title: 'LinkedIn', description: 'muhammet-sefa-kapisiz-26b136143', imageSource: '/favicon.ico' },
                ]
            } />
            <AsideItem className='text-xs' contents={
                [
                    { title: 'English', description: 'Upper Intermediate', imageSource: '/favicon.ico' },
                    { title: 'Turkish', description: 'Native', imageSource: '/favicon.ico' },
                ]
            } /> */}