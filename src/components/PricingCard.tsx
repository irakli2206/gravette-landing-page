
import { Link } from 'react-router-dom'
import AppIcon from './AppIcon'
import classNames from 'classnames'

type Props = {
    isMain: boolean
    type: string
    price: number
    desc: string
    features: string[]
    timeUnit: string
    buttonAction: () => void
    priceOff?: number
    className?: string
}

const PricingCard = ({ isMain, type, price, desc, features, buttonAction, priceOff, className }: Props) => {
    return (
        <div className={classNames(`flex flex-col relative flex-1  rounded-xl transition  px-10 py-12  pointer-events-none overflow-hidden ${className}`, {
            'ring-1  ring-indigo-500/30 hover:ring-indigo-500/50 bg-indigo-500 bg-opacity-10': isMain,
            'ring-1  ring-indigo-300/30 hover:ring-indigo-300/50 ': !isMain
        })}>
            {priceOff && <div className="absolute  top-4 -right-20 rotate-45 bg-indigo-400 w-64 px-4 py-2  flex justify-center items-end">
                <p className='text-lg'>{priceOff}% Off</p>
            </div>}

            <div className="flex justify-between">
                <h1 className='text-lg font-semibold text-gray-100'>{type}</h1>
                {isMain && <h1 className='text-lg font-semibold text-indigo-300'>Popular</h1>}
            </div>

            <div className='flex gap-2 items-center mt-6'>
                <h1 className='text-4xl font-bold '>${price}+</h1>
                {/* <p className='text-gray-300 text-md h-fit mt-auto mb-1'>/{timeUnit}</p> */}
            </div>

            <h2 className="text-gray-300 text-sm mt-4">{desc}</h2>


            <ul className="flex flex-col gap-4 mt-8">
                {features.map(feature => <div className="flex gap-2" key={feature}>
                    <AppIcon name='check' className='w-5 h-5 text-indigo-300' />
                    <p className="text-indigo-100 text-sm h-fit my-auto">{feature}</p>
                </div>)}


            </ul>
            <Link to='contact' onClick={buttonAction} className={classNames('  bg-indigo-600 font-medium text-sm text-center transition rounded-md py-2 mt-12 mb-auto cursor-pointer pointer-events-auto hover:bg-indigo-500', {

            })}>
                Get In Touch
            </Link>

        </div>
    )
}

export default PricingCard