import { CheckIcon } from '@heroicons/react/20/solid'
import {BiSolidLeaf} from 'react-icons/bi'
import {FaBitcoin} from 'react-icons/fa'

type Props = {
    name: string
    className?: string
    iconSize?: number
}

const AppIcon = ({ name, className, iconSize }: Props) => {

    const getIcon = () => {
        switch (name) {
            case ('arrow-right'): {
                return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            }
            case ('check'): {
                return <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />

            }
            case ('leaf'): {
                return <BiSolidLeaf  />

            }
            case('bitcoin'): {
                return <FaBitcoin size={iconSize}   />
            }

        }
    }

    return (
        <span aria-hidden="true" className={`${className}`}>
            {getIcon()}
        </span>
    )
}

export default AppIcon